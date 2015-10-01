PUB=/usr/lib/dart/bin/pub

.SUFFIXES: .js .dart

all: build/web/main.dart.js

build/web/main.dart.js: pubspec.yaml lib/underdogma.dart
	$(PUB) get
	$(PUB) build

clean:
	rm -rf build

distclean: clean
	rm -rf packages */packages

.PHONY: clean
