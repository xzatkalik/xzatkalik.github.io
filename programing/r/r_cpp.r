#' ---
#' title: "Softver R moje poznamky uvod do prace v R - C++ a R"
#' author: "Dominik Zatkalik, citovane materialy Tomas Bacigal"
#' date: "dnes"
#' output:
#'    html_document:
#'      toc: true
#' ---

#' Uvod do R ka je v nadradenej stranke r.htm
#' 
#' # Uvod
#' 
#' cite Tomas Bacigal:
#' 
#' ## Uvod
#' 
#' Oba programovacie jazykky (a ich ekosystemy) maju svoje vyhody. Samotne R je implementovane v jazyku C a mnohe jeho (najma statisticke) kniznice je vyhodne pouzit v C++ programoch. Naopak C++ programy dokazu vyrazne zrychlit vypocty v R, a to najma v pripade  
#'  * odovzdavania vysledkov medzi iteraciami cyklu
#'  * rekurzie, kedy je funkcia volana extremne vela krat
#'  * potreby pokrocilejsich datovych struktur (ordered maps, ..., double-ended queue) a algoritmov, pre ktore C++ prostrednictvom STL (standard template library) poskytuje efektivnejsie nastroje.  
#' 
#' Primarny zdroj prehladu: 
#' * Hadley Wickham: Advanced R  (http://adv-r.had.co.nz)
#'#' Doplnkove zdroje:  
#' * Dirk Eddelbuettel and Romain Francois: Rcpp: Seamless R and C++ Integration  
#  * Chris Paciorek (2014): C++ for statisticians, with a focus on interfacing from R and R packages  

library(Rcpp) # Bude treba aj funkcny C++ compiler. 
# Pod Windows treba mat nainstalovane RTools, pod Macintosh Xcode, pod Linux r-base-dev.

#' nastroj na hladanie instalacie rtools
library(devtools)

find_rtools(T)

#' 
#' ##  C++ inline
#' 
#' Ziaden vstup, skalarny vystup  (typ:  double, int, String, bool)
#' definicia cpp funkcie
cppFunction( 'int one() {
             return 1;
}')
#'volanie cpp funkcie
one()

#' ekvivalent v R syntaxi
one <- function() 1L

one()

#' skalarny vstup, skalarny vystup
signR <- function(x) {
  if(x > 0) {
    1
  } else if(x == 0) {
    0
  } else {
    -1
  }
}

cppFunction('int signC(int x) {
  if (x > 0){
    return 1;
  } else if( x == 0){
      return 0;
  } else {
        return -1;
  }           

}')

signR(-5)
signC(-5)

#' Funcia na scitanie 3 cisiel
cppFunction('int add(int x, int y, int z){
              int sum = x + y + z;
              return sum;
            }
          ')
add(1,2,3)

#' vector vstup, skalar vystup
sumR <- function(x) {  # priklad toho, ak sa v R pouziju klasicke konstrukty z C (napr. for cyklus)
  total <- 0
  for(i in seq_along(x)){
    total <- total + x[i]
  }
  total
}

cppFunction('double sumC(NumericVector x) {
            int n = x.size(); //C++ metody sa volaju s . podobne ako v R
            double total = 0;
            for(int i = 0; i <n; i++){
              total += x[i];
            }
            return total;
}')

# benchmark:
#install.packages(microbenchmark)
library(microbenchmark)
x <- runif(1e3)

microbenchmark(
  sum(x),
  sumC(x),
  sumR(x)
)

#' vector vstup, vector vystup (typ:  NumericVector, IntegerVector, CharacterVector, and LogicalVector)
pdistR <- function(x, ys) { # euklidovska vzdialenost medzi vektorom a skalarom
  sqrt((x-ys)^2)
  
}
cppFunction('NumericVector pdistC(double x, NumericVector ys){
  int n = ys.size();
  NumericVector out(n);
  for(int i = 0; i < n; ++i){
    out[i] = sqrt(pow(ys[i] - x, 2.0));
  }
  return out;
}
            ')

#'Rpp umoznuje aj pohodlne pouzivanie C pomocou
#' 1) vektorizacie operatorov + *, -, /, pow, <, <=, >, >=, ==, !=, !. Tak mozeme pdistC prepisat do tvaru  
cppFunction('NumericVector pdistC2(double x, NumericVector ys){
  return sqrt(pow((x -ys), 2));            

}')
microbenchmark(
  pdistC(0.5,x),
  pdistC2(0.5,x),
  pdistR(0.5,x)
)

#' 2) logickych suhrnnych funkcii any(), all(), is_true(), is_false(), is_na()  
#' 3) vektorovych nahladov a konstrukcii head(), tail(), rep_each(), rep_len(), rev(), seq_along(), seq_len()  
#' 4) dalsie uzitocne funkcie, ktore pozname z R  

 
#' matica na vstup, vektor na vystup (typ: NumericMatrix, IntegerMatrix, CharacterMatrix, LogicalMatrix)
cppFunction('NumericVector rowSumsC(NumericMatrix x) {
  int nrow = x.nrow(), ncol = x.ncol();
  NumericVector out(nrow);
  for(int i = 0; i < nrow; i++){
    double total = 0;
    for(int j = 0; j < ncol; j++){
      total += x(i,j);
    }
    out[i] = total;
  }
  return out;
}
            ')
# co je seed???
set.seed(1014)
x <- matrix(sample(100), 10)
rowSums(x)
rowSumsC(x)

#'
#' ##  c++ v externom subore vlzena do r
#'

#' FILE meanC.cpp
#
#
# #include <Rcpp.h>
# using namespace Rcpp;
# 
# // [[Rcpp::export]]
# double meanC(NumericVector x) {
#   int n = x.size();
#   double total = 0;
# 
#   for(int i = 0; i < n; ++i) {
#     total += x[i];
#   }
#   return total / n;
# }
# 
# /*** R
# library(microbenchmark)
# x <- runif(1e5)
# microbenchmark(
#   mean(x),
#   meanC(x)
# )
# */
#setwd(choose.dir(default = "", caption = ""))

#sourceCpp("meanC.cpp")  
#' meanC je rychlejsia, pretoze neposkytuje taku presnost ako mean.
