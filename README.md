# Soal test maggang Frontend engineer dengan Angular

Berikut adalah soal/pertanyaan yang perlu dijawab oleh peserta maggang

## knowledge base

1. Apa yang anda ketahui tentang Rest API?
2. Apa yang anda ketahui tentang Server side and Client side processing?
3. Apa yang anda ketahui tentang Design pattern Dependency Injection?
4. Apa yang anda ketahui tentang Typescript dan Angular framework?
5. Apa yang anda ketahui tentang Microfrontend?

## Design modules

Dalam suatu schenario ada requirement membuat aplikasi e-commerse seperti Tokopedia seperti berikut:

1. Catalog, pelanggan mencari product di toko
   ![catalog](src/assets/imgs/catalog.png)
2. Item, bisa melihat detail informasi produk
   ![items](src/assets/imgs/item.png)
3. Cart, pelanggan bisa menambahkan produk yang ingin di beli ke keranjang
   ![cart](src/assets/imgs/cart.png)
4. Setelah di checkout, masuk ke list transaction
   ![list-transaction](src/assets/imgs/list-transaction.png)
5. Kita juga bisa liat detail transactionya
   ![detail-transaction](src/assets/imgs/detail-transaction.png)

Kemudian temen-temen buat serta jelankan component communication terkait design UI/UX tersebut. contohnya coba breakdown componenet yang ada di module catalog trus coba dijelaskan gimana comunikasinya antara module tersebut.

## Praktek

Berdasarkan analisa tersebut, buat project monorepo (pada repository ini) dengan menggunakan framework [angular.io](https://angular.io/) seperti berikut specifikasinya:

- Data: data yang diperoleh harus menggunakan Rest API, temen-temen boleh menggunakan dummy api seperti [mockachino](https://www.mockachino.com/), [firebase](https://firebase.google.com/) atau sejenisnya
- CSS Framework: bebas, contohnya bootstrap, materialize-css, tailwindcss dan lain-lain
- arhitecture: Silahkan pilih monolith atau microfrontend

Jawaban ada di file Jawaban.txt

======================================================================================================================

# TestTdiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
