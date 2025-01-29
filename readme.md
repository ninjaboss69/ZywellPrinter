### Zywell 80 mm printer (Portable Printer)

<h4>Specification</h4>

<h5> Model: ZM06 </h5>
<h5> Paper Width: 79.5</h5>
<h5> Printer Speed: 80mm/sec</h5>
<h5> Interface: USB and BT</h5>

Printing Image

Connect Your Printer via USB

Check If Printer is Detected

```
lsusb
```

Enable permission To This Printer

```
sudo chmod 777 /dev/usb/lp0
```

Install node-thermal-printer

```
npm i node-thermal-printer
```

Then Run

```
node print.js
```
