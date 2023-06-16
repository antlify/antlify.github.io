---
title: "Drupal Projekt tervezés"
meta_title: "Drupal Planning"
description: "Drupal alapú webes projektek tervezése"
draft: false
---

A Drupal 10 alapú projektek tervezése kulcsfontosságú a sikeres kivitelezés megvalósításához. Íme néhány kulcsfontosságú szempont, amelyet figyelembe kell venni a tervezési szakaszban, a fejlesztés megkezdése előtt:

### 1. Projekt cél

Kezdje a webhelyprojekt céljának megértésével. Határozza meg az elsődleges célokat és célkitűzéseket, amelyeket el szeretne érni a Drupal oldallal. Ez bármi lehet az online értékesítés növelésétől a felhasználói elkötelezettség javításáig vagy a márkaismertség fokozásáig. _Foglalja össze egy mondatban a webhely különböző célkitűzéseit!_

### 2. Célközönség

Ismerje meg leendő, vagy aktuális felhasználóit, célközönségét a weboldalnak. Készítsen felméréseket vagy interjúkat, hogy megértse az igényeiket, preferenciáikat és elvárásaikat. _Dokumentálja, és rendszerezze fontosság alapján az eredményeket!_

### 3. Tartalom

Határozza meg a célok és célközönség ismeretében a webhely tartalmi szerkezetét és információs architektúráját. Hozzon létre egy webhelytérképet (listát), amely felvázolja a webhely főbb oldalait, szakaszait és tartalmi hierarchiáját. 

#### 3.1. Tartalomtípusok

Vázolja fel azokat a tartalomtípusokat, ahol egyszerű felépítésről beszélhetünk, mint egy blog bejegyzés vagy oldal. 
Az egyes tartalomtípusok mezői és tulajdonságait a következő formátumban lehet meghatározni:

```
Bejegyzés:
- Cím (szöveg)
- Tartalom (hosszzú, formázott szöveg)
- Kategória (taxonómia szótár)
- Szerző (felhasználó)  
```

#### 3.2 Taxonómia szótárak

Az egyes tartalomtípusokhoz tartozó szótárak definíciója, listája és esetleges további mezői.


Fontolja meg, hogy a különböző tartalomtípusok, taxonómiák és felhasználói szerepkörök hogyan lesznek megszervezve a Drupal 10 platformon belül.



##### Heading 5

###### Heading 6

---

### Paragraph

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.

Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships.

---

### Emphasis

1. Did you come here for something in **particular** or just general

2. Did you come here for something in <ins>particular</ins>

3. _Did you come here_

4. Did you come here for **something** in particular

5. Did you come here for something in particular

6. Did you come here for something in particular

7. URLs and URLs in angle brackets will automatically get turned into links. [http://www.example.com](http://www.example.com) or

8. [http://www.example.com](http://www.example.com) and sometimes example.com (but not on Github, for example).

---

### Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

---

### Ordered List

1. List item
2. List item
3. List item
4. List item
5. List item

---

### Unordered List

- List item
- List item
- List item
- List item
- List item

---

### Code and Syntax Highlighting

#### HTML

```html
<ul>
  <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="about/">About</a>
  </li>
</ul>`}
```

---

#### CSS

```css
img {
  vertical-align: middle;
  border: 0;
  max-width: 100%;
  height: auto;
}
```

---

#### JavaScript

```javascript
window.addEventListener("load", (e) => {
  document.querySelector(".preloader").style.display = "none";
})
```

---

### Button

<Button href="#" style="solid">Button</Button>

---

### Quote

> Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once.

---

### Notice

<Notice type="note">
  This is a simple note.
</Notice>

<Notice type="tip">
  This is a simple note.
</Notice>

<Notice type="info">
  This is a simple note.
</Notice>

<Notice type="warning">
  This is a simple note.
</Notice>

---

### Table

| #   |    First     |     Last     |       Handle |
| :-- | :----------: | :----------: | -----------: |
| 1   | Row:1 Cell:1 | Row:1 Cell:2 | Row:1 Cell:3 |
| 2   | Row:2 Cell:1 | Row:2 Cell:2 | Row:2 Cell:3 |
| 3   | Row:3 Cell:1 | Row:3 Cell:2 | Row:3 Cell:3 |

---

### Collapse

<Accordion client:load title="Why should you need to do this?">

- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.

</Accordion>

<Accordion client:load title="How can I adjust Horizontal centering">

- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.

</Accordion>

<Accordion client:load title="Should you use Negative margin?">

- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.
- This is a thing.

</Accordion>

---

### Image

![image](/images/image-placeholder.png)

---

### Youtube video

<Youtube client:load id="ZEe-IFezQok" title="Youtube Video Test Title" />

---

### Custom video

<Video width="100%" src="https://joy1.videvo.net/videvo_files/video/free/video0467/large_watermarked/_import_61516692993d77.04238324_preview.mp4" />
