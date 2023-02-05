#' ---
#' title: "Softver R moje poznamky uvod do prace v R - Grafika v R"
#' author: "Dominik Zatkalik, citovane materialy Tomas Bacigal"
#' date: "dnes"
#' output:
#'    html_document:
#'      toc: true
#' ---

#' Uvod do R ka je v nadradenej stranke r.htm
#' 
#'
#' 
#' cite Tomas Bacigal:
#' 
# ----- Statistika v R ------

#' 
#' #Náhodná premenná, rozdelenie pravdepodobnosti
#' 
#' 
#' ##Najbenejšie diskrétne rozdelenia pravdepodobnosti
#' 
#' 
#' ###Binomické rozdelenie
#' 
#' parametre rozdelenia
#' 
n <- 20 #pocet pokusov
p <- 0.25 # pravdepodobnost udalosti v jednom pokuse

x <- 0:n
plot(x, y=dbinom(x, size=n, prob=p), xlab="pocet uspesnych pokusov", ylab="pravdepodobnostna (na funkcia)", main = "Binomicke rozdelenie, n20, p=0.25")

#' Stredna hodnota E(X)
n*p

#'Disperzia D(X)
n*p*(1-p)

#'Teoreticky median
qbinom(0.5, size = n, prob = p)

#' Nahodbny vyber z binomickeho rozdelenia
y <- rbinom(30, size = n, prob = p)
median(y) #vyberovy median

#' Pravdepodobnost uspechu najviac v 3 pokusoch
pbinom(3, n, p)

#' Pravdepodobnost uspechu v aspon 10 pokusoch
1-pbinom(9,n,p)

#' Pravdepodobnost uspechu vo viac ako 10 pokusoch
1-pbinom(10,n,p)

#'Nanajvys kolko uspesnych pokusov mozno ocakavat s 90% pravdepodobnostou
qbinom(0.90, n, p)


#' 
#' ###Poissnovo rozdelenie
#' 
#' je aproximaciou Binomickeho rozdelenia pre male p a velke n, procom parameter rozdelenia lambda = n*p
#' 
lambda <-5

x <- 0:30

plot(x,
     y = dpois(x, lambda),
     xlab = "pocet uspesnych pokusov",
     ylab = "pravdepodobnost (na funkcia)",
     main = paste("Poissonovo rozdelnie, lambda = ", lambda)
     )


#' 
#' ####Priklad
#' 
#' Podla statistickych tabuliek pravdepodobnost dozitia sa nasledujuceho roku u 25-rocneho muza je priblizne 0.998. Poistovna ponuka muzom tohoto veku, ze pri rocnom poistnom 50 EUR vyplati pozostalym v pripade umrtia poisteneho sumu 8000 EUR. Je poistenych tisic 25-rocnych muzov. Aka je pravdepodobnost, ze ku koncu roka bude zisk poistovne aspon 30 000 EUR? Riesenie: Nech X je nah.premenna pocet umrti poistencov a Z nahodna premenna zisk poistovne. Potom plati Z = 501000 - 8000X. Hladame pravdepodobnost P(Z > =30 000) = P(50 000 - 8 000*X >= 30 000) = P(X <= 2.5) = F(2.5) =
#' 
ppois(2.5, lambda = 1000*(1-0.998))

#' kedze X ma Poisonovo rozdelenie s parametrom lambda=1000*(1-0.998).


#' 
#' ####cvicenie
#' 
#' V pristroji je 2000 suciastok. Pravdepodobnost zlyhania jednej je 0.005. Nahodna premenna X je pocet zlyhanych suciastok, X ma Poisonovo rozdelenie pravdepodobnosti.
#'
#'Vypocitajte parameter Poisonovho rozdelenia a vygenerujte z neho 20 nahodnych cisel.
#'
#'Vypocitajte vyberovy median a porovnajte ho s teoretickym medianom.
#'
#'Aka je pravdepod. ze zlyha viac ako 10 suciastok?
#'

#'
#' ##Najbenejšie spojité rozdelenia pravdepodobnosti
#'
#'
#' ###Normálne rozdelenie
#'

p <- 0.25
n <- 20
x <- 0:n
plot(x,
     y = dbinom(x, size = n, prob = p),
     ylab = "pravdepodobnost (na funkcia)",
     main = paste("Binomicke rozdelenie n =", n, ", p =", p)
     )
plot(function(x) dnorm(x, mean = n*p, sd=sqrt(n*p*(1-p))), from=min(x), to= max(x), add=T)
legend("topright", paste("N(",n*p,",",round(sqrt(n*p*(1-p)),2),")"), lty = 1)



n <- 100 
x <- 0:n
mu <- n*p
sig <- sqrt(n*p*(1-p))
plot(x, 
     y = dbinom(x, size = n, prob =p), 
     ylab = "pravdepodobnost(na funkcia)", 
     main=paste("Binomicke rozdelenie n=", n, ", p=", p)
)
plot(function(x) dnorm(x, mean=mu, sd=sig), from=min(x), to=max(x), add=T)
legend("topright", paste("N(",mu,",",round(sig,2),")"), lty=1)

plot(function(x) dnorm(x, mean=mu, sd=sig),
     xlim=c(-20,50), ylim=c(0,0.2),
     ylab = "hustota pravepodobnosti", 
     main=paste("Normálne rozdelenie mean=", mu, ", sd=", round(sig,2))
)
plot(function(x) dnorm(x, mean=0, sd=sig ), 
     from=-20, to=50, col="blue", add=T)
plot(function(x) dnorm(x, mean=0, sd=1), 
     from=-20, to=50, col="red", add=T)
legend("topright", legend=c(paste("N(0,",round(sig,2),")"), "N(0,1)"), 
       col=c("blue", "red"), lty=c(1,1))

#'
#'Ak majú dve nezávislé náhodné premenné X1 a X2 normálne rozdelenie, X1~N(m1,s1) a X2~N(m2,s2), potom ich lineárna kombinácia Y = aX1 + bX2 + c je tiez nahodna premenna s normalnym rozdelenim, Y~N(am1+bm2+c, a^2 * s1^2 + b^2 * s2^2).
#'

#'
#' ###loh-Normálne rozdelenie
#'
#'Ak X~N(m,s), potom náhodná premenná Y = e^X má LN(m,s).
#'
plot(function(x) dnorm(x, mean = 0, sd=1),
     xlim = c(-3,5), ylim = c(0,0.7),
     ylab = "hustota pravdepodobnosti",
     xlab = "X, Y",
     main = "Normalne a lognormalne rozdelenie"
     )
plot(function(x) dlnorm(x, meanlog = 0, sdlog = 1),
     from = -3, to = 5, col = "red", add=T)
legend("topright", legend = c("N(0,1)", "LN(0,1)"),
       col = c("black", "red"), lty = c(1,1))

#' 
#' Ve¾a náhodnıch velièín v prírode má rozdelenie blízke lognormálnemu (definované na kladnej reálnej osi), ich logaritmovaním môme na analızu/modelovanie poui mnostvo štatistickıch metód vyadujúcich normalitu náhodnıch premennıch (napr. t-test, regresia).
#' 
#' 

#'
#' ### Chi-kvadrat rozdelenie
#'
#'Ak X1, X2 … Xn maju normovane normálne rozdelenie N(0,1), potom náhodná premenná Y = X1^2 + X2^2 + … Xn^2 má Chi^2(n) rozdelenie s n-stupòami vo¾nosti. E(Y) = n, D(Y) = 2n
#'
plot(function(x) dnorm(x, mean=0, sd=1 ), 
     xlim = c(-3,5), ylim = c(0,0.6),
     ylab = "hustota pravepodobnosti",
     xlab = "X1,...,Xn, Y",
     main="Normálne a chi-kvadrát rozdelenie"
)
plot(function(x) dchisq(x, df=2), 
     from=-3, to=5, col="blue", add=T)
plot(function(x) dchisq(x, df=3), 
     from=-3, to=5, col="red", add=T)
legend("topright", legend=c("N(0,1)","Chi^2(2)","Chi^2(3)"), 
       col=c("black", "blue","red"), lty=c(1,1,1))

#'
#' ### Studentovo t rozdelenie
#'
#'Ak X1~N(0,1) a X2~Chi^2(n), potom Y = X1/sqrt(X2/n) ma t(n) rozdelenie s n stupnami volnosti. E(Y) = 0, D(Y) = n/(n-2)
#'
plot(function(x) dnorm(x, mean=0, sd=1),
     xlim=c(-5,5),
     ylab = "hustota pravepodobnosti", 
     main="Normované normálne a t-rozdelenie"
)
plot(function(x) dt(x, df=2), 
     from=-5, to=5, col="blue", add=T
)
plot(function(x) dt(x, df=20), 
     from=-5, to=5, col="red", add=T
)
legend("topright", legend=c("N(0,1)", "t(df=2)", "t(df=20)"), 
       col=c("black", "blue", "red"), lty=c(1,1,1))

#'
#' ### Fisher-Snedecorovo F-rozdelenie
#' 
#' Ak X1~Chi^2(m) a X2~Chi^2(n), potom Y = (X1/m)/(X2/n) ma F(m,n) rozdelenie s m a n stupnami volnosti. E(Y) = 0, D(Y) = n/(n-2)
#' 
plot(function(x) dchisq(x, df=3),
     xlim=c(0,5), ylim=c(0,0.7),
     ylab = "hustota pravepodobnosti", 
     main="Chi-kvadrat a F-rozdelenie"
)
plot(function(x) df(x, df1=3,df=5), 
     xlim=c(0,5), col="blue", add=T
)
plot(function(x) df(x, df1=5,df=3), 
     xlim=c(0,5), col="red", add=T
)
legend("topright", legend=c("Chi^2(3)", "F(3,5)", "F(5,3)"), 
       col=c("black", "blue", "red"), lty=c(1,1,1))


#'
#' ### Exponenciálne rozdelenie
#'
#'Napr. doba zivotnosti zariadenia alebo doba èakania zákazníkov v rade.
#'
plot(function(x) dexp(x, rate=1),   # rate > 0  (lambda)
    xlim=c(0,3), ylim=c(0,2),
    ylab = "hustota pravepodobnosti", 
    main="Exponenciálne rozdelenie"
)
plot(function(x) dexp(x, rate=2), 
     xlim=c(0,5), col="blue", add=T
)
legend("topright", legend=c("Exp(1)", "Exp(2)"), 
       col=c("black", "blue"), lty=c(1,1))

#'stredna hodnota E(X) = 1/lambda
integrate(function(x) x*dexp(x, rate = 2), -Inf, Inf)$value

#'median 1/lambda * log(2)
qexp(0.5, rate = 2)

#'disperzia D(x) = (1/lambda)^2
integrate(function(x) ((x-1/2)^2)*dexp(x, rate=2), -Inf, Inf)$value

#'
#'Spolu s normálnym rozdelením a chi-kvadrát, ale aj binomickım (pre fixné n) a poissonovım rozdelením patrí do tzv. exponenciálnej rodiny rozdelení. Ïalšími v rodine sú beta a gamma (zovšeobecnenie exponenciálneho) rozdelenie. Hustota má tvar f(x|par)=g(x)h(par)exp(a(x)*b(par)).
#'

#'
#' ###Weibulovo rozdelenie
#'
#'Zovšeobecòuje exponenciálne rozdelenie, ked “failure rate” zavisi od èasu:
#'ak shape<1, failure rate sa s postupom èasu zniuje, keïe vırazne slabšie èlánky systému zlyhali
#'ak shape=1, model “bez pamäte” t.j. redukcia na exponenciálne rozdelenie
#'ak shape>1, naopak, ked miera zlyhania sa postupom èasu zvyšuje
#'
plot(function(x) dexp(x, rate=2),
     xlim=c(0,2), ylim=c(0,3.5),
     ylab = "hustota pravepodobnosti", 
     main="Weibullovo rozdelenie, scale=1/lambda=1/2"
)
plot(function(x) dweibull(x, shape=0.5, scale=1/2), 
     xlim=c(0,3), col="blue", add=T
)
plot(function(x)  dweibull(x, shape=1, scale=1/2), 
     xlim=c(0,5), col="black", add=T
)
plot(function(x)  dweibull(x, shape=1.5, scale=1/2), 
     xlim=c(0,5), col="red", add=T
)
legend("topright", legend=c("Weib(0.5,1/2)","Weib(1,1/2), Exp(2)", "Weib(1.5,1/2)"), 
       col=c("blue", "black", "red"), lty=c(1,1,1))

#'
#'Pouíva sa na modelovanie rozdelennia NP: preitie (poist.), vıskyt prepätia v el.sieti, rıchlos vetra, extrémne udalosti ako zráky a prietoky (hydrol.) Ïalšie rozdelenia definované na [0,inf) a pouívané napr. v hydrológii sú Gumbel, GEV, generalized Pareto…
#'



#'
#' ###Cvicenie
#'
#'Dojazd auta (po najblišiu poruchu) je náhodná premenná s exponenciálnym rozdelením a strednou hodnotou 5000 km. Na dobrodrunej ceste nás po prejdení 2000km èaká aj púš s priemerom 1000km, kde niet iadneho autoservisu.

#'Aká je pravdepodobnos, e uviazneme práve na tej púšti?
#x <- seq(0,10000,length.out = 1000)
#Rc
#mdrMisc::plotDistr(x, dexp(x,2e-04), regions=list(c(2000,3000)),
#                     ylim=c(0,2e-04)
#)

#'Ko¾ko kilometrov bezporuchovej prevádzky nám auto “garantuje” so spo¾ahlivosou 90%?
#'Aké rozdelenie by ste zvolili, aby lepšie vystihovalo prirodzené starnutie vozidla?
  
#'
#' #Popisna statistika
#'
#' ##Ciselne charakteristiky
#' 
#' ###Miery polohy
#' 

#'stredna hodnota
x1 <- c(2,4, 8, 9, 11, 11, 12)

sum(x1)/length(x1)

mean(x1)

x2 <- c(2, 4, 8, 9, 11, 11, 120)
mean(x2)

#'median
median(x1) # robustna miera polohy, t.j. necitliva voci vybocujucim meraniam (outliers)

median(x2)

#'geometricky priemer
gm <- function(x) prod(x)^(1/length(x))
gm(x1)  # pri zosikmenych rozdeleniach byva odhad casto blizky medianu

exp(mean(log(x1)))

#'
#' ###Miery variability
#'

#'rozptyl a standardna odchylka
var(x1)

sd(x1)  # sqrt(var(x1))

sd(x2)

#'medzikvartalove rozpatie
IQR(x1)

IQR(x2) # rezistentny voci outlierom

quantile(x1, probs=0.25)   #dolny kvartil

#'stredna absolutna odchylka
median(abs(x1-median(x1)))

median(abs(x2-median(x2)))

#'
#' ###Miery sikomsti (asymetrie)
#'

#'klasicka miera sikomosti
( n <- length(x1) )

sum((x1-mean(x1))^3) / sd(x1)^3 * n/((n-1)*(n-2))

sikmost <- function(x) {
  sum((x-mean(x))^3) / sd(x)^3 * 
    length(x)/((length(x)-1)*(length(x)-2))
}
sikmost(x1)

#'
#'##Graficke charakteristiky
#'
#' ### histogram a kobercovy graf
#' 
set.seed(10)
x3 <- rbinom(100, size=20, prob=0.8)
plot(x3)  #malo informativne

table(x3) # tabulka pocetnosti

hist(x3, breaks=12.5:19.5, ylab="pocetnost")  # histogram so stredmi kategorii v celych cislach
rug(jitter(x3, factor=1))   # kobercovy graf

#'
#' ### Krabicovy graf (boxplot)
#'
x4 <- rbinom(70, size=20, prob=0.6)
boxplot(x3, x4)

#'S intervalom spolahlivosti pre median a sirkou umernou rozsahu vzorky.

boxplot(x3, x4, notch=T, varwidth = T) 

#'
#' ##2.3 Cvièenie
#'
#'Vygenerujte vzorku nahodnych cisel rozsahu aspon 10 hodnot (z ¾ubovolneho rozdelenia).
#'
#'Definujte funkciu podla vztahu na vypocet vyberovej standardnej odchylky a pomocou nej ju aj vypocitajte.
#'
#'Vypocitajte interkvartilove rozpatie pomocou kvantilov.
#'
#'Zobrazte histogram s relativnou pocetnostou na osi y, a spolu s nim aj hustotu predpokladaneho parametrickeho rozdelenia.

#'
#' #Bodove  intervalovee odhady
#' 
#' Vela krat pozname rozdelenie nahodnej premennej (NP) a potrebujeme si vytvorit predstavu o jeho parametroch, ktore nepozname, napr. o strednej hodnote ci disperzii normalneho rozdelenia. Vieme vypocitat priemernu hodnotu ci standardnu odchylku z vyberu (pozorovanych hodnot) - bodove odhady, ktore su so zvysujucim sa rozsahom vyberu presnejsie, ale ako presne? O tom hovoria intervaly spolahlivosti.
#' 
#' ##Pomer proportion
#' 
#' Priklad: 42 zo 100 opytanych nakupujucich ma rado znacku ABC. Ako prezentovat prefenciu sirsej populacie ludi?
#' 
#'Riesenie: Bodovy odhad je zjavny uz z prieskumu.
#' 
p <- 42/100 

#' Ak X by bola nahodna premenna, ze sa (nahodne vybraty) clovek bud rozhodne pre ABC (X=1) alebo nie (X=0), pomer p by sme dostali ako priemer z realizacii X, teda p=sum(x)/n, kde x by boli konkretne odpovede x=(1,1,0,1,0,0,0,1,…). Kedze X ma alternativne rozdelenie (s parametrom a zaroven strednou hodnotou p), jeho rozptyl je D(X)=p(1-p). Nahodna premenna Y=sum(X)/n ma tiez strednu hodnotu E(Y)=E(X)=p, no rozptylom D(Y)=p(1-p)/n. Teda cim by sme mali vacsi vyber respondentov, tym “uzsia by bola slucka” okolo odhadovaneho (neznameho) parametra p. Pri dostatocne velkom n bude mat nah.premenna Z=[Y-E(Y)]/SD(Y) normalne rozdelenie N(0,1), pricom SD(Y)=sqrt(D(Y)/n)=SE(X) mozme odhadnut
( se <- sqrt(p*(1-p)/100) )  

#'co nam pomoze lokalizovat Y. Kedze Z sa s pravdepodobnostou 1. 0.68 zrealizuje medzi (-1,1) 2. 0.95 vyskytne medzi (-2,2) 3. 0.998 nadobudne hodnotu medzi (-3,3) tak nah.premenna Y bude (napr. s 1-alpha = 95% pravdepodobnostou)
alpha <- 0.05

#' nadobudat hodnoty medzi hranicami
p + c(-1,1)*qnorm(1-alpha/2)*se

#'Podobny vysledok (pocitany s presnou hodnotou SE) da vstavana funkcia
prop.test(42, n=100, conf.level=1-alpha)$conf.int

#'Keby sme sa napr. pytali iba 20 ludi (a v roznych dnoch), pocas 50 dni by sme dostali taketo 90% intervaly pre parameter p
m <- 50; n <- 20; p0 <- 0.4; 
p <-  rbinom(m,n,p0)/n 
se <- sqrt(p*(1-p)/n) 
alpha <- 0.10
matplot(rbind(p - qnorm(1-alpha/2)*se, p + qnorm(1-alpha/2)*se), 
        rbind(1:m,1:m), 
        type="l", lty=1, xlab="p", ylab="deò", main="Interval spolahlivosti pre pomer"
)
abline(v=p0) # skutocna hodnota parametra


#'
#' ##Stredná hodnota a rozptyl normálneho rozdelenia
#'
#'Ak pozname rozptyl nahodnej premennej X a 1) jej rozdelenie je normalne alebo 2) n je dostatocne velke na aplikovanie centralnej limitnej vety, potom na vypocet intervalovych odhadov strednej hodnoty mozno pouzit kvantily normalneho rozdelenia, pretoze Z=[X-E(X)]/SE(X) ma N(0,1) rozdelenie. Ak vsak rozptyl nepozname, Z ma Studentovo t-rozdelenie s n-1 stupnami volnosti (a oznacuje sa T namiesto Z).
#'
#'Priklad: Predstavme si cloveka, ktory sa pravidelne vazi, X je jeho hmotnost (a x je vektor pozorovani). Najdime 95% interval spolahlivosti pre priemer (=intervalovy odhad E(X)).
#'
x <- c(175, 176, 173, 175, 174, 173, 173, 176, 173, 179)

#'Riesenie: Predpokladajme najprv, ze SD(X)=1.5 a X ma normalne rozdelenie.
( n <- length(x) )

( xmean <- mean(x) )

xmean + c(-1,1)*qnorm(1-0.05/2)*1.5/sqrt(n)  # IS pri znamom sigma (SD)
#'V praxi je SD malokedy zname, potom na vypocet IS pouzijeme jeho odhad
( xsd <- sd(x) )

xmean + c(-1,1) * qt(1-0.05/2, n-1) * xsd/sqrt(n)

#'ktory je vacsinou sirsi, pretoze t-rozdelenie ma hrubsie chvosty (pozri graf v predoslom cviceni) nez N(0,1). Alternativne
t.test(x)$conf.int

#'Ak by sme mali dovod pochybovat o normalnom rozdeleni X, ci uz na zaklade popisnej statistiky alebo testu normality, vhodnejsou mierou polohy by bol median.
#'
#'Priklad: Majme nahodnu premennu plat s nasledovnymi pozorovaniami (pay of CEO’s, v roku 2001 v dolaroch). Aky je bodovy a intervalovy odhad medianu?
x <- c(110, 12, 2.5, 98, 1017, 540, 54, 4.3, 150, 432)

#'Riesenie:
median(x)  # vyberovy median = bodovy odhad

wilcox.test(x, conf.int=TRUE)$conf.int  # intervalovy odhad

#'Interval je dost siroky, pretoze rozsah n je maly. Nema zmysel ani uvazovat o t-teste, rozdelenie ma daleko od normalneho.
hist(x)

boxplot(x)

qqnorm(x); qqline(x)

#'Priklad 6.4 (str. 155, Markechova 2011)
#'
#'Pre urèenie poistnej zásoby urèitého druhu tovaru je potrebné odhadnú 95-percentnım intervalovım odhadom strednú hodnotu a rozptyl èasu, za akı dodávate¾ vybaví objednávku. Náhodne bolo vybratıch 20 objednávok, u ktorıch sa zaznamenala dåka ich vybavenia v dòoch. Boli získané tieto údaje:
#'
x <- c(18, 12, 18,13,13,16,11,17,20,14,15,14,15,16,15,17,13,14,16,13)
priem <- mean(x)  # bodovy odhad strednej hodnoty
s <- sd(x)  # bodovy odhad smerodajnej odchylky
n <- length(x)  # rozsah vyberu
alfa <- 0.05  # hladina vvyznamnosti
q <- qt(1-alfa/2, df=n-1)  # 97.5% kvantil t-rozdelenia s 19 stupnami volnosti

m + c(D=-1, H=1) * q * s / sqrt(n)  # interval spolahliovsti pre strednu hodnotu

t.test(x, conf.level = 0.95)$conf.int   # vstavanou funkciou

q <- qchisq(c(alfa/2, 1-alfa/2), df=n-1)
sqrt((n-1)/c(D=q[2], H=q[1]))*s  # interval spolahlivosti pre smerodajnu odchylku

#'lavostranne intervalove odhady:
c(D = priem - qt(1-alfa, df=n-1) * s / sqrt(n), H = Inf)  # pre strednu hodnotu

c(D= sqrt((n-1)/qchisq(1-alfa,df=n-1)) * s, H = Inf)  # pre stand.odchylku
#'Pøíklad 4.5. (Lit:RPS)
#'
#'Pøi kontrole data spotøeby urèitého druhu masové konzervy ve skladech produktù masného prùmyslu bylo náhodnì vybráno 320 z 20 000 konzerv a zjištìno, e 59 z nich má prošlou záruèní lhùtu. Stanovte se spolehlivostí 95% intervalovı odhad podílu konzerv s prošlou záruèní lhùtou.
#'

#'
#'#Testovanie statistickych hypotez
#'
#'Technicky, testovanie stat.hypotez a konstrukcia intervalov spolahlivosti pouziva rovnaky postup, rozdiel je len v zavere. Pri testovani nas zaujima odpoved na otazku: da sa na zaklade dostupnych pozorovani zamietnut (nulova) hypoteza?
#'
#'

































