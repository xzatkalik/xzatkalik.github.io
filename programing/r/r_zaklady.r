#' ---
#' title: "Softver R moje poznamky uvod do prace v R"
#' author: "Dominik Zatkalik, citovane materialy Tomas Bacigal"
#' date: "dnes"
#' output:
#'    html_document:
#'      toc: true
#' ---

#' Uvod do R ka je v nadradenej stranke r.htm
#' 
#' 
#' # Matice a polia
#' 
a <- c(1,2,3,4,5,6,7,8,9,10)
A <- matrix(a, nrow = 5, ncol = 2) #vytvori maticu A po stplcoch 5x3 z vektora a
A #vypise maticu A

B <- matrix(a, nrow = 5, ncol = 2, byrow = TRUE) # matica B po riadkoch s vekotra a
B

C <- a 
dim(C) <- c(5,2) # matica je vektor ktory dostal dva rozmery
C

#' Transponovanie matice
C <- t(C)
C

#' Nasobenie matice
B %*% C

#' Determinant matice
d <- c(2,4,2,2)
D <- matrix(d, nrow = 2, ncol = 2)
D
det(D) # iba pre stvorcove matice

#' Inverzna matica
solve(D)

#'
#' ## Matice zlozene s vektorov
#' 
x <- c(1,2,3,4)
y <- c(11,22,33,44)
#' Po stlpcoch
cbind(x,y)
#' Po riadkoch 
rbind(x,y)

#' 
#' # vstupy udajov
#' 

#' vektor rtazcov
ovocie <- c("jablko", "hruška", "pomaranè")
ovocie

#' sekvencia s krokom 1
1:9

1.5:10 # POZNAMKA nedostane az po koniec 10 ten pridame rucne napr. c(1.5:10,10)

#' sekvencia s krokom i
seq(-2,5)

seq(-2,5,by = .5) # prirastok po 0.5

seq(-2,5,length = 4) # dlzka sekvecia alias pocet prvkov bude 4

#' opakovanie n krat
rep(9,5) # opakuj 9 patkrat

rep(1:4, 2)

rep(1:4, each = 2) # zopakuje kazdy prvok 2 krat

rep(1:4, each=2, times=3) #zopakuje kazdy prvok 2 krat a celu postupnost 3 krat

rep(1:4,1:4) # postupne zvacsuje pocet opakovani prvku

#' Tvorba jednotkovej matice s vyuzitim opakovania
matrix(rep(c(1,rep(0,4)),4),nrow=4,ncol=4)   

#'Jednoduchsia tvorba jednotkovej matice
diag(1, nrow = 4)

#' Vstup z klavesnice
vstup <- scan() #postupne zadavanie s klavesnice koniec entrom na prazdno

vstup

#' 
#' ## Vstup zo suboru, kde hodnoty su oddelene tab space ...
#' 
#' Vyhladanie adresara rucne

#'setwd(choose.dir(default = "", caption = "Select folder"))
#'
#' Nastavenie adresara na pevno
#' 
#'setwd("C:/")
#'
#' Nacitanie vstupu zo suboru
#' 
#'vstup <- scan("vstup.txt", what = character(), sep = "", skip = 1)
#'
#' Vyhladanie suboru
#' 
#'vstup <- scan( file.choose(), what = character(), sep="", skip=1)   # ak si chceme subor vyhladat (prve 3 riadky vynecha)
#'


#'
#' # Manipulacia s prvkami pola
#'

#'
#' ## Vektory
#'

#' Vytvornie vektora z spojenim vektorv x a y. ...; z vykonanie vypisu v jednom riadku
z = c(x,y); z

#' Volanie prveho prvku
z[1]

#' Vypis sekvencie konkretnych prvkov
z[5:8]

#' Vypis prvok s por cislom 5 a 8 
z[c(5,8)]

#' Vyber vsetkych okrem zadanych prvov zapornym indexom
z[-(2:8)]

z[-c(5,8)]

#' Zmena prvku v indexe
z[8] <- 10

#'Vysledok operacie vektor logickych hodnot
z > 5 # porovanie prvkov vektora z s hodnotu 5

#' Vyber prvkov vacsich ako 5
z[z>5]

#'Vsetky neparne cisla 
(1:20)[c(TRUE, FALSE)] # vektor log hodnot sa replikoval

#'
#' ## Matice
#'

A

#'Prvok 1. riadku a 2 stplca
A[1,2]

#'Prvy riadok
A[1,]

#'Prvy stplec
A[,1]

#'
#' # Jedoduche grafy
#'
plot(sin, from = 0, to =2*pi) # pouzije plot.function

#'Hranie sa s grafom
par(mfrow=c(1,2)) #rozdelenie zobraovanej oblasti do matice 1x2, cize 2 obrazky v jednom riadku asi

x <- seq(0, 2*pi, length=16+1) #diskretne body
plot(x, sin(x), type = "o", lty = "dashed")

plot(x, sin(x), type="p", pch="+")
lines(x, sin(x), col="red", lty="dashed")


#' Nastvenie povodnej mriezky
par(mfrow=c(1,1)) 

#'
postscript(file="sinus.eps", horizontal = T, paper = "special", width = 10., height = 5.)

plot(sin, from = 0, to = 2*pi)
dev.off()

#'Demonstracne ukazky
demo(graphics)
demo(persp)

#'
#'Ukážky pokroèilejšej grafiky:
#'
#'http://www.r-graph-gallery.com/
#'
#'http://rgraphgallery.blogspot.sk/
#'
#'vygooglite “r graphics” skupina Images
#'
#'Galéria interaktívnej grafiky: https://shiny.rstudio.com/gallery/
#'

#'
#' # Datove objekty
#'
#'

#'vector, factor, array, matrix, data frame, ts, list
#
#Su charakterizovane menom, obsahom ale aj atributmi, ktore specifikuju typ obsahu.
# Zakladnymi atributmi su dlzka (length) a mód (mode).
#
# Módy:
# numeric, character, complex, logical, function, expression, ...
# iba "data frame" a "list" mozu obsahovat viac ako jeden mód
#

#'
#'##Vector
#'
#V  nasledujúcich príkladoch vytvoríme nový vektor zadaním dåžky, módu a konkrétneho prvku. Nezadané hodnoty sú doplnené prednastavenými, napr. dåžka rovná nule alebo ostatné prvky rovné FALSE (ekvivalentom v numerickom móde je nula), prípadne nie sú definované vôbec (NA vo význame "not available"). 
v <- vector(mode="logical", length=0); v     #nový vektor dåžky 0 predurèený obsahova logické hodnoty "ano" alebo "nie", alternatívne aj v <- logical() 

v <- logical(); v[2] <- TRUE; v

v <- logical(3); v[2] <- TRUE; v

#'
#'##factor 
#'
#' uspornejsi sposob ukladania v pamati
#' 
factor(c(1,2,2,3,2,3))

#'
#'##matrix
#'
#'Matica pomocou vektorov
A <- 1:12
dim(A) <- c(6,2)
t(A) # transponovane A

#'Funkciou matrix
matrix(1:12, nrow = 2)

#'
#'##Data frame
#'
pocet_pasazierov <- c(1,3,2,5,2,2,1,1,2,1)
priputany <- c(T,T,F,T,F,F,T,F,F,T)
auta <- data.frame(pocet_pasazierov, priputany)
auta

#' uprava data framu
#' editacia data framu v dialogovom okne
auta <- edit(auta) 
auta

#' vypise zlozenie data framu
attributes(auta)
str(auta)

#' Vstavane subory dat v rku
data()
#'Nacitanie datoveho suboru ktory je sucastou rka
data(trees)
trees

#'Vyber stlpca girth, rozne varianty, subsetting
trees["Girth"] #pozor na zatvorku
trees[1]
trees[[1]]
trees$Girth  

#'Pripojenie premennej Grith do globalneho systemu
#Girth #toto nejde
attach(trees) # pripoji data s trees
Girth #uz ide
detach(trees) #odpoji trees s globalneho systemu

#'
#'##list
#'
#'list nemusi mat rovnaky pocet riadkov/stlpcov
List1 <- list(polozka1=c(1,2,3), polozka2=c("hruska","jablko"), polozka3= FALSE)
List1
# subsetting funguje podobne ako pri data frames

#'
#'##ts(time series)
#'
ts(1:10, start = 1959)

cr <- ts(1:47, frequency = 12, start = c(1959,2))

ts.plot(cr)

#'
#'##expression
#'

x <- 3; y <- 2.5; z <- 1
vyraz <- expression(x / (y+exp(z)))
vyraz

eval(vyraz)

D(vyraz, "y")

#'
#'##Konverzia medzi datovymi objektami
#'
#'Prevedie bool na 1 0
as.numeric(c(TRUE, FALSE))

#' Prevedie text na cislo
as.numeric("4")

#' Taketo nevie
as.numeric(c("A","S"))

#' Prevedie na bool AKO NETUSIM
as.logical(c(-1,0,1,2))

#' Prevedie retazce na bool
as.logical(c("FALSE", "F"))

#' Toto nie
as.logical("A")

#' Prevedie na retazce
as.character(1)

as.character(TRUE)

#' Prevedie .... NEVIEM
as.numeric(factor(c(0,100,36.7,100)))

#' Prevedie na format desatinnych cisiel
as.numeric(as.character( factor(c(0,100,36.7,100)) ))

#'
#' ## Operatory
#'
# aritmeticke: + - * / ^ %%(modulo) %/%(celociselne delenie)
# porovnavacie: < > <= >= == !=
# logicke: ! & && | || xor
# dalsie operatory R: $ @ [ [[ : ? <- <<- :: 

#'vypise napovedu k operatorom a prioritam
?Syntax

x <- 2
y <- z <- 1:3
LO <- c(F,F,F)

0 < x & x < 1     #skrateny zapis 0 < x < 1 NEfunguje

x < y | LO        
x < y || LO       #zdvojeny logicky operator si vsima iba prvy prvok vektorov

y == z            #porovnanie po prvkoch
identical(y, z)   #porovnanie objektov ako 'celku'
all.equal(y, z)

0.9 == 1.1 - 0.2            #porovnanie numerickych hodnot
identical(0.9, 1.1 - 0.2)
all.equal(0.9, 1.1 - 0.2)
all.equal(0.9, 1.1 - 0.2, tolerance = 1e-16)



