BASE_NAME=JSPrepBook
WORKB_NAME=JSPrepWorkBook

all: $(BASE_NAME).pdf $(BASE_NAME).epub $(WORKB_NAME).pdf $(WORKB_NAME).epub 

$(BASE_NAME).pdf: prepare
	asciidoctor-pdf -D pdf index.adoc

$(BASE_NAME).epub: prepare
	/usr/local/bin/asciidoctor-epub3 -D epub index.adoc

$(WORKB_NAME).pdf: prepare
	asciidoctor-pdf -D pdf workbook.adoc

$(WORKB_NAME).epub: prepare
	/usr/local/bin/asciidoctor-epub3 -D epub workbook.adoc

prepare:
	mkdir -p pdf
	mkdir -p epub

clean:
	rm -rf pdf/ epub/