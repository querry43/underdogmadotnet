DART_SDK=/home/matt/dart-sdk
DART2JS_FLAGS=-c

.SUFFIXES: .js .dart

all: packages main.dart.js index.html

index.html: web/index.html
	ln -sf web/index.html index.html

main.dart.js: main.dart lib/underdogma.dart
	$(DART_SDK)/bin/dart2js $(DART2JS_FLAGS) $< -o $@

packages:
	$(DART_SDK)/bin/pub install
	chmod -R a+rX ~/.pub-cache

clean:
	rm -f *.dart.js.map *.dart.js.deps

distclean: clean
	rm -rf packages *.dart.js index.html

.PHONY: clean
