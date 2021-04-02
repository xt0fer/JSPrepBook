BASE_NAME=JSPrepBook
WORKB_NAME=JSPrepWorkBook

all: $(BASE_NAME).pdf $(BASE_NAME).epub $(WORKB_NAME).pdf $(WORKB_NAME).epub 

$(BASE_NAME).pdf: prepare
	asciidoctor-pdf -D pdf index.adoc
	/usr/local/bin/asciidoctor-epub3 -D epub index.adoc

$(BASE_NAME).epub: prepare
	asciidoctor-pdf -D pdf index.adoc
	
prepare:
	mkdir -p pdf
	mkdir -p epub