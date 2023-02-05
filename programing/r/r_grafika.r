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
#' # Uvod
#' 
#' cite Tomas Bacigal:
#' 
# ----- Grafika v R ------
#' 
#' # Grafika v R
#' 
#' ## Staticke obazky
#' 
#' ### Zakladna grafika
#' 
data_wide <- matrix(c(10, 7, 12, 9, 11, 6), nrow = 2, ncol = 3, byrow = T, dimnames = list(paste0("B",1:2), paste0("A", 1:3))
                    )
#' data vo wide formate
data_wide

#' co robi toto??? rozdeli grafiku na 2 stlpce aby mohli byt 2 grafy v jednom riadku
par(mfrow=c(1,2))

#' 2 sposoby vykrslenia dat
barplot(data_wide, beside = TRUE) 
barplot(t(data_wide), beside = FALSE)

#' nastavenie oblasti pre grafiky spat na jeden graf v riadku
par(mfrow=c(1,1))

#' iny typ grafu
plot(data_wide[1,], type="l", xlab = "A", ylab = "value")
lines(data_wide[2,], type="l", col="blue")
legend("right", legend = rownames(data_wide), lty = c(1,1),col=c("black","blue"))

#' Pomockou pre vizualizaciu pomocou zakladnej grafiky R je napr. balik GrapheR - uzivatelske prostredie s mnozstvom volieb pre tvorbu 6 druhov grafov: histogram, box-and-whisker plot, bar plot, pie chart, curve and scatter plot.  
#' https://journal.r-project.org/archive/2011-2/RJournal_2011-2_Herve.pdf  
library(GrapheR)
#' ??? asi nejake data 
data("iris")
#' natiahne data iris do premennych  
run.GrapheR()


#' Altrernativou je zobrazenie pomocou nastrojov baliku ggplot2, ktore produkuju ovela "vyladenejsie" a na pohlad krajsie grafy.  Dobry uvod a tipy pre ggplot2: Chang2013-R_Graphics_Cookbook  
#' Data treba pripravit v tzv. long formate.

data_long <- reshape2::melt(data_wide, varnames=c("Bval","Aval"), value.name="value")

library(ggplot2)
#'Grafy pomocou ggplot2, komponenty grafu sa pridavaju pomocou "+"
ggplot(data_long, aes(x=Aval, y=value, fill=Bval)) + geom_bar(stat="identity", position="dodge")
#' vyhoda je ze nie je nutne vopred transponovat ani inak trnasformovt data
ggplot(data_long, aes(x=Bval, y=value, fill=Aval)) + geom_bar(stat = "identity", position = "dodge")

#'  typ grafu sa urci komponenetom zodpovednym za geometriu
ggplot(data_long, aes(x=Aval, y=value, colour=Bval, group=Bval)) + geom_line()
#' dalsou vyhodou je, ze graf je prisposobeny rozsahu vsetkych dat, na rozdiel od pridavania vrstiev klasickym sposobom cez lines, points a pod.

#' ggplot2 pouziva nasledovnu terminologiu:  
#  * data - v stlpcoch obsahuje premenne, ktorych hodnoty chceme zobrazit, najma numericke, kategorialne a znakove  
#  * geom - geometricke objekty, ktore reprezentuju udaje, napr. stlpce, krivky, body 
#  * aes - aesthetics, esteticke (vizualne) vlastnosti geometrickych udajov, napr. poloha, farba a hrubka ciar, tvar a velkost bodovych znaciek
#  * scale - uprava zobrazenia ("mapping") z priestoru udajov do priestoru vizualnych vlastnosti (aes), napr. spojita miera na osi y zobrazuje vacsie numericke hodnoty do vyssej polohy v priestore
#  * guide - ukazuje ako interpretovat/premietnut vizualne vlastnosti naspat do priestoru udajov, napr. ciarky na osi, popis osi, legenda


#' dalsia ukazka
( data <- data.frame(xval=1:4, yval=c(3,5,6,9), group=c("A","B","A","B")))

ggplot(data, aes(x=xval, y=yval)) 

#' ulozime do premennej a budeme pridavat geometricke komponenty
p <- ggplot(data, aes(x=xval, y=yval)) 

#' s bodkami
p + geom_point()

#' aesthetic mapping
p + geom_point(aes(colour=group))

#' aesthetic setting
p + geom_point(colour="blue")

#' scale
p + geom_point() + scale_x_continuous(limits=c(0,8))

#' zmeni aj  legendu
p + geom_point(aes(colour=group)) + scale_colour_manual(values=c("orange", "forestgreen"))

#' 
#' ## Interaktivne grafy
#' 
#' ### identify() & locator() 
#' 
#' najjednoduchsi nastroj poskytuje identify() a locator()

#'scaterplot
#plot(data$x, data$y)
#' treba kurzorom zvolit body, potom Esc  
#identity(data$x, data$y, labels=row.names(data))
#coords <- locator(type="l") # zvlolene body budu pospajane ciarou
#coords # list suradnic x a y


#' ### manipulate
#' 
#' jednoduche priklady s manipulate: https://support.rstudio.com/hc/en-us/articles/200551906-Interactive-Plotting-with-Manipulate

library(manipulate)

#' interaktivne prvky pod ozubenym kolieckom FUNGUJE LEN V RKU NEJDE KOMPILOVAT DO REPORTU
#manipulate(
#  plot(cars, xlim= c(0, x.max), type=type, ann= label),
#  x.max = slider(10, 25, step=5, initial=25),
#  type = picker("Points" = "p", "Line" = "l", "Step" = "s"),
#  label = checkbox(TRUE, "Draw Labels")
#)


#' ### ggvis 
#' 
#' Balik stavajuci na logike "grammar of graphics" (podobne ako ggplot2).  
#' Zdroj: http://ggvis.rstudio.com/ggvis-basics.html

library(ggvis)

#' balik dat technickej specifikacie vybranych automobilov
data(mtcars)

#'staticke grafy ggvis

p <- ggvis(mtcars, x=~wt, y= ~mpg) # hmotnost wt vs dojazd na galon paliva mpg
layer_points(p)

#' alternativny postup
mtcars %>% # pipe operator (pouziva ho pomerne vela balikov, original v "magrittr")
  ggvis(x = ~wt, y = ~mpg) %>%  # ~ indikuje pouzitie lokalnej premennej z datoveho ramca mtcars
  layer_points()

library(dplyr)
mtcars %>%
  ggvis(x = ~mpg, y = ~disp) %>%
  mutate(disp = disp / 61.0237) %>% # konvertuj zdvihovy objem (displacement) z kubickych palcov na litre
  layer_points()

mtcars %>% ggvis(~mpg, ~disp, fill = ~vs) %>% layer_points()  #okrem fill mozno pouzit stroke, size alebo shape:
mtcars %>% ggvis(~mpg, ~disp, shape = ~factor(cyl)) %>% layer_points()
mtcars %>% ggvis(~wt, ~mpg, size := 300, opacity := 0.4) %>% layer_points()  # zadanie fixnej hodnoty musi ist cez operator ":="

#' interaktivne grafy ggvis
mtcars %>%
  ggvis(~wt, ~mpg, size := input_slider(10,100), opacity:= input_slider(0,1)) %>%
layer_points()


mtcars %>% 
  ggvis(~wt) %>% 
  layer_histograms(width =  input_slider(0, 2, step = 0.10, label = "width"),
                   center = input_slider(0, 2, step = 0.05, label = "center"))

keys_s <- left_right(10, 1000, step = 50)
mtcars %>% ggvis(~wt, ~mpg, size := keys_s, opacity := 0.5) %>% layer_points()  # velkost kontrolovana sipkami

mtcars %>% ggvis(~wt, ~mpg) %>% 
  layer_points() %>% 
  add_tooltip(function(df) df$wt)

#' ### ggobi 
#' 
#' (http://www.ggobi.org/rggobi/introduction.pdf)
#' 
#' ### scatterD3 
#' 
#' 'D3' 'JavaScript' scatterplots from 'R' with interactive features : panning, zooming, tooltips, etc.  
#' Zdroj: https://cran.r-project.org/web/packages/scatterD3/vignettes/introduction.html

library(scatterD3)
 
#' zakladny skaterplot graf je mozne priblizovat a oddialovat
scatterD3(x = wt, y = mpg, data = mtcars)

#' graf je mozne priblizovat a oddialovat os y nula
scatterD3(data = mtcars, x = wt, y = mpg, point_size = 35, point_opacity = 0.5, fixed = TRUE)

#' kategoricke premenne
mtcars$cyl_fac <- paste(mtcars$cyl, "cylinders")
scatterD3(data = mtcars, x = cyl_fac, y=mpg)

#' popisy bodov
mtcars$names <- rownames(mtcars)
scatterD3(data = mtcars, x=wt, y = mpg, lab=names, labels_size = 9)

#' dalsie parametre
scatterD3(data = mtcars, x = wt, y = mpg, col_var = cyl, symbol_var = gear)

scatterD3(data = mtcars, x = wt, y = mpg, col_var = cyl, size_var = hp, 
          size_range = c(10,1000), point_opacity = 0.7)

scatterD3(data = mtcars, x = wt, y = mpg, col_var = cyl,
          colors = c("4" = "#ECD078", "8" = "#C02942", "6" = "#53777A"))
scatterD3(data = mtcars, x = wt, y = mpg, col_var = disp)

#' pridanie ciary
lm(mpg ~ wt, mtcars)
scatterD3(data = mtcars, x = wt, y = mpg, lines = data.frame(slope = -5.344, intercept = 37.285))

#'uprava popisu aktivuje sa nechanim  kurzora na modrom bode zobrazi text
tooltips <- paste("This is an incredible <strong>", rownames(mtcars), "</strong> <br /> with", mtcars$cyl, "cylinders !")
scatterD3(data = mtcars, x=wt, y = mpg, tooltip_text = tooltips)

#'elipsy spolahlivosti okolo bodov
scatterD3(data = mtcars, x=wt, y = mpg, col_var = cyl, ellipses = TRUE)

#'vyber lasom
mtcars$names <- rownames(mtcars)
scatterD3(data = mtcars, x=wt, y = mpg, lab = names, lasso = TRUE) # Shift + LMB
#' Funkcii je ovela viac, treba pozriet manual... 

#' ### ggraptR 
#' 
#' Nastroj na interaktivnu pracu s datami
#' 
#' Rapid And Pretty Things in R: A shiny GUI for Data Visualisation and Analysis with ggplot2  
#' Intended for both technical and non-technical users to create interactive data visualizations through a web browser GUI without writing any code.  
#' Vignette: https://cran.r-project.org/web/packages/ggraptR/vignettes/ggraptR.html
ggraptR::ggraptR(mtcars)

#' 
#' # Prezentacia analyz
#' 
#' zdroj: R for Data Science (Garrett Grolemund, Hadley Wickham) http://r4ds.had.co.nz/
#' 
#' R Markdown provides a unified authoring framework for data science, combining your code, its results, and your prose commentary. R Markdown documents are fully reproducible and support dozens of output formats, like PDFs, Word files, slideshows, and more.  
#' R Markdown files are designed to be used in three ways:  
#' * For communicating to decision makers, who want to focus on the conclusions, not the code behind the analysis.
#' * For collaborating with other data scientists (including future you!), who are interested in both your conclusions, and how you reached them (i.e., the code).
#' * As an environment in which to do data science, as a modern day lab notebook where you can capture not only what you did, but also what you were thinking.  
#'   
#' R Markdown formats:
#' * Documents (pdf, html, doc, rtf, md, github)
#' * Notebooks - html documents with full source code  (to comunicate with other data scientists)
#' * Presentations  (ioslides, slidy, beamer, revealjs, rmdshower)
#' * Dashboards (to communicate large amounts of information visually and quickly)
#' * interactivity (htmlwidgets - client-side using JavaScript; shiny - server-side with running R)
#' * websites
#' * bookdown, prettydoc, rticles ...
