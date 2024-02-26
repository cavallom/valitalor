# valitalor

Italian localized validation library. Since the package is localized, by choice some of the code and documentation are also localized.

- [valitalor](#valitalor)
  - [Installation](#installation)
    - [Package check](#package-check)
  - [Usage](#usage)
    - [isCodiceFiscale](#iscodicefiscale)
    - [isIBAN](#isiban)
    - [isPartitaIVA](#ispartitaiva)
    - [isTargaAuto](#istargaauto)
    - [isTargaMoto](#istargamoto)
  - [License](#license)

## Installation

You can install this package via npm.

```bash
npm i valitalor
```

### Package check

Just to check the success of the installation, also returns basic package information.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
|  |  |  | No parameters are required |

```bash
const valita = require('valitalor');
console.log(valita.itWorks());

#output : { json } > {
#    "itWorks": "Yes, it works!",
#    "package": "valitalor",
#    "version": "1.0.3"
#}
```

## Usage

### isCodiceFiscale

Validation of the "Codice Fiscale" (individual TAX code) including verification of the control character.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| codicefiscale | string | true | Codice Fiscale |

```bash
const valita = require('valitalor');
console.log(valita.isCodiceFiscale('<codicefiscale>'));

#output : bool > true | false
```

### isIBAN

Formal validation of the IBAN bank account code.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| IBAN | string | true | IBAN |

```bash
const valita = require('valitalor');
console.log(valita.isIBAN('<IBAN>'));

#output : bool > true | false
```

### isPartitaIVA

Validation of the "Partita IVA" (VAT code) including verification of the control number.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| partitIVA | string | true | "Partita IVA" (VAT code) |

```bash
const valita = require('valitalor');
console.log(valita.isPartitaIVA('<partitIVA>'));

#output : bool > true | false
```

### isTargaAuto

Formal validation of the car license plate number.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| targa | string | true | Car license plate number |

```bash
const valita = require('valitalor');
console.log(valita.isTargaAuto('<targa>'));

#output : bool > true | false
```

### isTargaMoto

Formal validation of the motorcycle license plate number.

| Param | Type | Mandatory | Description |
| ----- | ---- | ----------- | --------- |
| targa | string | true | Motorcycle license plate number |

```bash
const valita = require('valitalor');
console.log(valita.isTargaMoto('<codicefiscale>'));

#output : bool > true | false
```

## License

[MIT](https://opensource.org/blog/license/mit)
