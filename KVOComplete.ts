declare lower;

input MALength = 13;
input PaintBars = yes;

def DM = high - low;
def Trend = if hlc3 > hlc3[1] then 1 else -1;
def CM = DM + if Trend == Trend[1] then CM[1] else DM[1];
def VForce = if CM != 0 then Trend * 100 * volume * AbsValue(2 * DM / CM - 1) else VForce[1];
plot KVOsc = ExpAverage(VForce, 34) - ExpAverage(VForce, 55);
plot TriggerLine = Average(KVOsc, MALength);

plot ZeroLine = 0;

plot KVOH = KVOsc - Average(KVOsc, MALength);

KVOH.DefineColor("Positive", Color.UPTICK);
KVOH.DefineColor("Negative", Color.DOWNTICK);
KVOH.AssignValueColor(if KVOH >= 0 then KVOH.color("Positive") else KVOH.color("Negative"));
KVOH.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
KVOH.SetLineWeight(3);

KVOsc.SetDefaultColor(GetColor(8));
TriggerLine.SetDefaultColor(GetColor(1));
ZeroLine.SetDefaultColor(GetColor(5));

AssignPriceColor(if KVOsc >= TriggerLine and PaintBars == yes then KVOH.color("Positive") else if KVOsc <= TriggerLine and PaintBars == yes then KVOH.color("Negative") else Color.CURRENT);
