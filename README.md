# JSPrepBook
source for ZCW JavaScript Prep Book

this thing is NOT is Markdown, the source is in AsciiDoc.
Look at it, it's a better way of doing this for multi-file, multi-topic projects.

### install asciidoctor 

----
sudo gem install asciidoctor-pdf --pre

asciidoctor-pdf -v
----
*Asciidoctor PDF* is a native PDF converter for AsciiDoc.

to generate targets:
use `asciidoctor-pdf -D PDF index.adoc` to get index.pdf
use `/usr/local/bin/asciidoctor-epub3 -D EPUB index.adoc` to get EPUB/index.epub

to generate targets:
use `asciidoctor-pdf  -D PDF workbook.adoc` to get index.pdf
use `/usr/local/bin/asciidoctor-epub3 -D EPUB workbook.adoc` to get EPUB/index.epub

remember https://javascript.info/object-basics is a really good site.
