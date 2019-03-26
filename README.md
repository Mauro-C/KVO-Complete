# KVO-Complete

**Credit for the initial algorithm goes to Stephen J. Klinger.**

In a nutshell, the KVO uses high, low, close and volume to create a volume force. This volume force (VF) is then turned into an oscillator by taking a fast EMA (exponential moving average) of VF and subtracting a slow EMA of VF. A signal line (KOS), which is an EMA of the Klinger Oscillator (KO), is plotted to trigger trading signals.

My modification of the Klinger Volume Oscillator is designed to simplify signal analysis. It adds a built in histrogram (similar to ToS's built-in MACD indicator), and support for colored price candles that can be toggled on or off in the options.
