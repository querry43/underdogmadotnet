DART_SDK=/home/matt/dart-sdk
DART2JS_FLAGS=-c

.SUFFIXES: .js .dart

all: packages web/main.dart.js

%.dart.js: %.dart lib/underdogma.dart
	$(DART_SDK)/bin/dart2js $(DART2JS_FLAGS) $< -o $@

packages:
	$(DART_SDK)/bin/pub install
	chmod -R a+rX ~/.pub-cache

clean:
	rm -f web/*.dart.js.map web/*.dart.js.deps

distclean: clean
	rm -rf packages */packages web/*.dart.js

.PHONY: clean
