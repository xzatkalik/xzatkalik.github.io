#' ---
#' title: "Softver R moje poznamky uvod do prace v R - PROGRAMOVANIE"
#' author: "Dominik Zatkalik, citovane materialy Tomas Bacigal"
#' date: "dnes"
#' output:
#'    html_document:
#'      toc: true
#' ---

#' Uvod do R ka je v nadradenej stranke r.htm
#' 
#' # PROGRAMOVANIE
#' 

#' 
#' ## Cykly a podmienky
#'
#'if, else, for, while, repeat, break, next Majme údaje uložené v data frame
#'
#'
data <- data.frame(
  a=1:5,
  b=runif(5),
  c=c(2,0.3,4,-1,0)
)

#'Vypocet medianu pre data
median(data$a)

median(data$b)

median(data$c)

#' alternativa
vysledok <- vector("double", ncol(data))
for(i in 1:length(vysledok)) {
  vysledok[i] <- median(data[[i]])
}
vysledok

#'Príklad s kontrol-slovami if, next a break
a=0
for(i in 1:20) {
  a = i^2
  if(a <= 10){
    cat('a = ', a, '(<=10)'); cat('\n')
    next
  }
  if(a == 144){
    cat('a = ',a); cat('\n')
    break
  }
}

#' hodnota iteracnej premennej nie je po skonceni cyklu vymazana
 i
 
#' odhad hodnoty Ludolfovho cisla 
eps <- 1; s <- 0; n <- 0 #inicializacne hodnoty
while (eps > .001) {
  n <- n+1  #pocet generovanych bodov
  x <- runif(1, -1, 1) #suradnice nahodneho bodu v stvorci
  y <- runif(1,-1,1) #[-1,-1] [1, -1] [1,1] [-1,1]
  if(x^2 + y^2 < 1) s <- s+1 #pocet bodov v nutri kruhu s polomerom 1
  pihat <- 4*s/n #odhad pi
  eps = abs(pihat - pi) #s toleranciou eps
  
}
pihat #odhad
 
n #pocet iteracii 
 

#'nahodny vypis z N(0,1) rozdelenia kym cislo nepresiahne 2.0
repeat {a <- rnorm(1); if (a > 2.0) break; cat(a); cat("\n")} 

#' 
#' ## Vlastne funkcie
#'
 
#' Funkcia vrati maximum 2 skalarnych cisel alebo hlasku o ich rovnosti
f1 <- function(a,b) {
  if(is.numeric(c(a,b))) {
    if(a < b) return(b)
    if(b < a) return(a)
    else print("hodnoty su rovnake")
  }
  else print("akceptujem len cisla")
}

f1(4,7)

f1(0,exp(log(0)))

f1("Adam","Eva")


#' 
#' ## Vyhnutie sa cyklom alias vektorizacia
#'

M <- cbind(rnorm(20,0,1), rnorm(20,-5,1))
 
#namiesto 
suma <- numeric(m <- NCOL(M)); n <- NROW(M);

for(i in 1:n) {
  for(j in 1:m){
    suma[j] <- suma[j] + M[i,j]
  }
}
suma/n

# je efektivnejsie pouzit funkciu apply (v tomto pripade existuje nahrada colMeans(M))
apply(M, MARGIN = 2, FUN = mean)

# apply ma niekolko modifikacii: lapply, sapply, replicate, mapply, tapply
# namiesto vstavanej mozno aplikovat vlastnu (aj nepomenovanu) funkciu

sapply(c(-1,0,5,-5,9), function(x) if(x>0) x else 0)

# alebo danu funkciu pomenovat a explicitne vektorizovat
f2 <- function(prvy, druhy) {
  if(prvy > druhy) prvy else if(druhy>prvy) druhy else NA
}
f2(prvy=c(-1,2,10), druhy=c(2,2,2))   #testuje iba prvy prvok z oboch argumentov

f2 <- Vectorize(f2)
f2(dru=c(2,2,2),pr=c(-1,2,10))      #vsimnite si, ze argumenty netreba pisat celym menom,

#ak je ich skratka unikatna

# vektorizovanou nahradou za if(cond) expr1 else expr2 je ifelse(cond,expr1,expr2)
a <- c(-1,2,10); b <- c(2,2,2)
ifelse(a > b, a, b)           #v tomto pripade ma rovnaky efekt aj pmax(a,b)









#' 
#' ## Lokalne premenne
#'
# -- prostredie lokalnych premennych --

a <- 0
local({
  b <- a
  a <- 8
  a + b
})

a

#' 
#' # Poznamky
#'
#'
#'Ak ulozime definicie funkcii a premennych do suboru, povedzme mojeprogramy.r, mozme ich kedykolvek pouzit v inom skriptovom subore pripojenim source(“mojeprogramy.r”)
#'
#'Uzitocna vec pri hladani chyb vo vlastnej funkcii (debugging) je umiestnit funkciu browser() do tela funkcie. Po zavolani nasej funkcie nam spristupni jej prostredie so vsetkymi lokalnymi premennymi.
#'
#'Manual od studentov v slovencine http://rmanual.fri.uniza.sk/
#'  
#'  R v hydrologii http://pebesma.staff.ifgi.de/OpenWater2013_E01.pdf
#'
#'Preèo používa R?
#'  * https://elearningindustry.com/applications-r-programming-r-eal-world
#'* https://www.youtube.com/watch?v=TR2bHSJ_eck
#'
#'Odporúèané zdroje na ïalšie samoštúdium:
#'  * Advanced R http://adv-r.had.co.nz/
#'  * R for data science http://r4ds.had.co.nz/
#'  * Google R style guide https://google.github.io/styleguide/Rguide.xml
#'* manualy: https://cran.r-project.org/other-docs.html
#'* https://bookdown.org/
#'  
#'  Zabavna literatura:
#'  * YaRrr! The Pirate’s Guide to R https://bookdown.org/ndphillips/YaRrr/
#'  * The R inferno https://www.burns-stat.com/pages/Tutor/R_inferno.pdf
#'
#'



