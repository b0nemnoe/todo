# todo Projektfeladat

Készítsenek Vue.js felhasználásával egy To Do App-ot! Az oldal 3 oldalt tartalmazzon a következő
tartalommal / funkcióval:

  1. feladatok listája (url: tasks)
    Egy reszponzív elrendezésű oldalon megjelennek a tárolt feladatok. Minden olyan feladat,
    amely még nincs kész, egy gombra kattintva szerkeszthető. Minden feladathoz tartozik egy
    készre állító gomb.
  2. új feladat rögzítése (url: newtask)
    Megfelelő űrlap segítségével rögzíthetjük az új feladat későbbiekben felsorolt paramétereit.
    Az egyes attribútumok rögzítéséhez a megfelelő űrlap elemet felhasználja! Sikeres rögzítést
    követően legyen egy automatikus átirányítás a feladatok listájára!
  3. meglévő feladat szerkesztése (url: edittask)
    Megjelenéskor űrlap segítéségével legyenek módosíthatóak a feladat paraméterei! Ideális
    esetben betöltéskor az űrlap mezői már tartalmazzák a módosítani kívánt feladat korábban
    tárolt paramétereit.


  A feladatokról a következő információkat tároljuk:
    1. Feladat neve / címe (title)
    2. feladat leírása (desc)
    3. Állapot (Kész van-e már?) (isFinished)
    4. Határidő (deadline)
    
  A feladatokat tartalmazó tömböt egy store segítségével tároljuk el!
  
  A feladat beadása kétféleképpen történhet: git repo megosztásával, vagy teljes projekt tömörítve a
  node_modules mappa nélkül.
