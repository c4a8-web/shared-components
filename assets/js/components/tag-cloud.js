import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.container = root.querySelector('.tag-cloud__container');
    this.itemsContainer = root.querySelector('.tag-cloud__items');

    // for (let i = this.itemsContainer.children.length - 1; i >= 0; i--) {
    //   this.itemsContainer.appendChild(this.itemsContainer.children[Math.random() * i | 0]);
    // }

    this.itemsPerOuterRow = 3;
    this.itemsPerInnerRow = 5;

    this.items = this.container?.querySelectorAll('.tag-cloud__item');
    this.textElements = this.container?.querySelectorAll('a');
    this.tagList = [];

    this.rowLength = 0;
    this.init();
  }

  init() {
    this.weightingElement();
    this.positionElements();
    //this.animateGroupElements();
  }

  /*getGroupSize (size) {
    return Math.ceil(this.tagList.length / size);
  }

  animateGroupElements() {
    const maxValue = 1;
    const minValue = 0.5;
    let size = 3;
    let groupSize = this.getGroupSize(size);
    let borderReached = false;
    let step = 0.001;
    let backToStart = false;

    for (let i = 0; i < this.tagList.length; i++) {
      const currentValue = this.tagList[i].standardValue;
      let upperBorder = currentValue > maxValue
      let lowerBorder = currentValue < minValue
      let aboveStart = currentValue > 0.8;
      let belowStart = currentValue < 0.8;

      if (upperBorder && !backToStart) {
        step = -0.001;
        backToStart = true;
        break;

      } else if (lowerBorder && !backToStart) {
        step = 0.001;
        backToStart = true;
        break;
      }

      if (backToStart && aboveStart) {
        step = -0.001;
        break;

      } else if (backToStart && belowStart) {
        step = 0.001;
        break;
      }
    }

    let i = 0;

    while (!borderReached && i < this.tagList.length) {
      //let bias = Math.random() * 2;
      let bias = 1;
      let currentValue = this.tagList[i].standardValue;
      let newValue = 0;

      newValue = (i % groupSize === 0) ? currentValue + step * bias : currentValue - step * bias;

      this.tagList[i].standardValue = newValue;
      i++;

    }

    this.placeGroups();
    window.requestAnimationFrame(this.animateGroupElements.bind(this));
  }

  blurCalculation (standardValue, exponent) {
    return 1/Math.pow(standardValue, exponent);
  }

  placeGroups () {
    for (let i = 0; i < this.tagList.length; i++) {
      const currentItem = this.items[i];
      const standardValue = this.tagList[i].standardValue;
      const blurValue = this.blurCalculation(standardValue, 2.8);

      currentItem.style.transform = 'scale( ' + standardValue + ')';
      currentItem.style.filter = 'blur(' + blurValue + 'px)';
    }
  }*/

  getList() {
    const list = [];

    let rowsToExpand = [];
    let rows = [];
    let rowIndex = 0;
    let weight = 0;
    let isRowFull = false;

    for (let i = 0; i < this.tagList.length; i++) {
      let isFirstRow = rowIndex === 0 ? true : false;
      let isLastRow = rowIndex === this.rowLength - 1 ? true : false;
      let itemsInRow = isFirstRow || isLastRow ? this.itemsPerOuterRow : this.itemsPerInnerRow;

      const currentTagWeight = this.tagList[i].weighting;

      isRowFull = itemsInRow < weight + currentTagWeight;

      if (isRowFull) {
        if (itemsInRow !== weight) {
          rowsToExpand.push(rowIndex);
        }

        rows.push({ rowIndex, weight });

        rowIndex++;
      }

      if (typeof list[rowIndex] !== 'object') {
        list[rowIndex] = [];
        weight = 0;
      }

      list[rowIndex].push(this.tagList[i]);
      weight += currentTagWeight;
    }

    this.rowLength = list.length;

    rows.push({ rowIndex, weight });

    for (let i = 0; i < rowsToExpand.length; i++) {
      const currentIndex = rowsToExpand[i];
      const currentRow = rows[currentIndex];

      this.expandRow(currentRow, list);
    }

    let lastRow = this.rowLength - 1;
    let beforeLastRow = lastRow - 1;

    //Abfrage falls es mehr gewichte in der letzten Zeile gibt
    let lastRowExists = typeof list[lastRow] !== 'undefined';
    console.log(list);

    if (lastRowExists && rows[lastRow].weight > this.itemsPerOuterRow) {
      beforeLastRow = lastRow;
      lastRow = lastRow + 1;
      rows.push({ rowIndex: lastRow, weight: 0 });
      this.rowLength = lastRow + 1;
    }

    console.log(list[lastRow]);

    if (!lastRowExists) {
      list[lastRow] = [];

      let listObj = list[beforeLastRow];
      let biggest = 0;
      let biggestIndex = 0;

      for (let i = 0; i < listObj.length; i++) {
        if (listObj[i].weighting > biggest) {
          biggest = listObj[i].weighting;
          biggestIndex = i;
        }
      }

      const elementToMove = listObj[biggestIndex];

      rows[beforeLastRow].weight -= elementToMove.weighting;

      list[lastRow].push(elementToMove);
      list[beforeLastRow].splice(biggestIndex, 1);

      this.expandRow(rows[beforeLastRow], list);

      //falls die letzte Zeile fehlt und noch aufgefüllt werden muss
      rows.push({ rowIndex: lastRow, weight: elementToMove.weighting });
      this.expandRow(rows[lastRow], list);

    } else {
      this.expandRow(rows[beforeLastRow], list);
      this.expandRow(rows[lastRow], list);
    }
    return list;
  }

  expandRow(row, list) {
    const index = row.rowIndex;
    const weight = row.weight;
    const isFirstRow = index === 0 ? true : false;
    const isLastRow = index === this.rowLength - 1 ? true : false;
    const itemsInRow = isFirstRow || isLastRow ? this.itemsPerOuterRow : this.itemsPerInnerRow;

    let missingWeight = itemsInRow - weight;

    for (let i = 0; i < missingWeight; i++) {
      console.log(index, i);
      const element = list[index][i];

      if (!element) {
        list[index][i - 1].weighting++;
        continue;
      }

      element.weighting++;
    }

    //update row.weight EdgeCase row gets called one time more than needed
    row.weight = itemsInRow;
    this.rowLength = this.getRowLength();
  }

  getRowLength() {
    let totalWeight = 0;
    const corners = 4;
    const columns = 5;

    for (let i = 0; i < this.tagList.length; i++) {
      totalWeight += this.tagList[i].weighting;
    }
    totalWeight += corners;

    return Math.ceil(totalWeight / columns);
  }

  positionElements() {
    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;

    let currentElementsPerRow = 0;

    this.rowLength = this.getRowLength();
    let elementPerRow = 0;
    let array = this.getList();
    let currentElement = 0;

    for (let i = 0; i < array.length; i++) {
      let isFirstRow = i === 0 ? true : false;
      let isLastRow = i === array.length - 1 ? true : false;
      let eitherFirstOrLastRow = isFirstRow || isLastRow ? true : false;

      columnStart = 1;
      columnEnd = 2;
      rowStart = 1;

      elementPerRow = array[i]?.length;
      currentElementsPerRow = 0;

      while (elementPerRow > currentElementsPerRow) {
        //Orientiert sich nicht mehr an der TagList
        const weight = array[i][currentElementsPerRow].weighting;
        let emptyRow = currentElementsPerRow === 0 ? true : false;

        rowStart = i + 1;
        rowEnd = rowStart + 1;
        columnEnd = columnStart + weight;

        if (eitherFirstOrLastRow) {
          //
          if (emptyRow) {
            columnStart += 1;
          }

          columnEnd = columnStart + weight;
        }

        this.items[currentElement].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

        columnStart += weight;
        currentElement++;
        currentElementsPerRow++;
      }
    }
  }

  weightingElement() {
    let avgOffsetWidth = 0;

    for (let j = 0; j < this.textElements.length; j++) {
      avgOffsetWidth += this.textElements[j].offsetWidth / this.textElements.length;
    }

    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      tag.offsetWidth = this.textElements[i].offsetWidth;
      tag.standardValue = 0.8;
      tag.weighting = Math.ceil(this.textElements[i].offsetWidth / avgOffsetWidth);
      this.tagList.push(tag);
    }
  }
}

export default TagCloud;
