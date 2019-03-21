# KVO-Complete

**Credit for the algorithm goes to Stephen J. Klinger.**

Modified implementation of the Klinger Volume Oscillator (my personal trading indicator for trading equities).

The KVO uses high, low, close and volume to create a volume force. This volume force (VF) is then turned into an oscillator by taking a fast EMA (exponential moving average) of VF and subtracting a slow EMA of VF. A signal line (KOS), which is an EMA of the Klinger Oscillator (KO), is plotted to trigger trading signals.

This modification adds a built in histrogram (similar to TOS's own MACD indicator), and support for color bars that can be toggled on or off in the options.
