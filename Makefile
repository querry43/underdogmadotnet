PUB=/usr/lib/dart/bin/pub

.SUFFIXES: .js .dart

all: build/web/main.dart.js

deps:
	$(PUB) get --packages-dir

build/web/main.dart.js: deps pubspec.yaml lib/underdogma.dart
	$(PUB) build

test:
	QT_QPA_PLATFORM=offscreen $(PUB) run test -p phantomjs test/underdogma_test.dart

clean:
	rm -rf build

distclean: clean
	rm -rf packages */packages

.PHONY: test deps clean distclean
