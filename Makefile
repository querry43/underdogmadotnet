DART_SDK=/home/matt/dart-sdk
DART2JS=$(DART_SDK)/bin/dart2js
DART2JS_FLAGS=-c

.SUFFIXES: .js .dart

all: app.dart.js packages

%.dart.js : %.dart
	$(DART_SDK)/bin/dart2js $(DART2JS_FLAGS) $< -o $@

packages:
	$(DART_SDK)/bin/pub install
	chmod -R a+rX ~/.pub-cache

clean:
	rm -f *.dart.js.map *.dart.js.deps

distclean: clean
	rm -rf packages *.dart.js

.PHONY: clean
