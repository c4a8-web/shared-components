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


    this.init();
  }

  init () {
    this.weightingElement();
    this.positionElements();
    //this.setVariables();

  }

  //change
  setVariables() {
    let delay = 0;

    for (let i = 0; i < this.tagList.length; i++) {
      delay = Math.random() > 0.5 ?  Math.random()*5000 : Math.random()*1000;
      this.items[i].style.setProperty('--item-animation-delay', this.tagList[i].weighting * delay + 'ms');
    }
  }



  getList (rowLength) {
    rowLength = Math.ceil(rowLength);
    const list =  [];

    let rowsToExpand = [];
    let rows = [];
    let rowIndex = 0;
    let weight = 0;
    let isRowFull = false;

    for (let i = 0; i < this.tagList.length; i++) {
      let isFirstRow = (rowIndex === 0) ? true : false;
      let isLastRow = (rowIndex === rowLength - 1) ? true : false;
      let itemsInRow = (isFirstRow || isLastRow) ? this.itemsPerOuterRow : this.itemsPerInnerRow;

      const currentTagWeight = this.tagList[i].weighting;

      isRowFull = itemsInRow < weight + currentTagWeight;

      if (isRowFull) {
        if (itemsInRow !== weight) {
          rowsToExpand.push(rowIndex);
        }

        rows.push({rowIndex, weight});

        rowIndex++;
      }

      if (typeof list[rowIndex] !== 'object') {
        list[rowIndex] = [];
        weight = 0;
      }

      list[rowIndex].push(this.tagList[i]);
      weight += currentTagWeight;
    }

    rows.push({rowIndex, weight});

    for (let i = 0; i < rowsToExpand.length; i++) {
      const currentIndex = rowsToExpand[i];
      const currentRow = rows[currentIndex];

      this.expandRow(currentRow, rowLength, list);
    }

    const lastRow = rowLength - 1;

    if (typeof list[lastRow] === 'undefined') {
      list[lastRow] = [];
      const beforeLastRow = lastRow - 1;
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

      this.expandRow(rows[beforeLastRow], rowLength, list);

      //Todo if weight of last Element isnt full expand last row
      //Todo Edge case more rows than rowLength estimated
      //this.expandRow(rows[lastRow], rowLength, list);
    }
    return list;
  }

  expandRow(row, rowLength, list) {
    const index = row.rowIndex;
    const weight = row.weight;

    const isFirstRow = (index === 0) ? true : false;
    const isLastRow = (index === rowLength - 1) ? true : false;
    const itemsInRow = (isFirstRow || isLastRow) ? this.itemsPerOuterRow : this.itemsPerInnerRow;

    const missingWeight = itemsInRow - weight;

    for(let i = 0; i < missingWeight; i++) {
      list[index][i].weighting++;
    }
  }

  getRowLength () {
    let totalWeight = 0;
    const corners = 4;
    const columns = 5;

    for (let i = 0; i < this.tagList.length; i++) {
      totalWeight += this.tagList[i].weighting;
    }
    totalWeight += corners;
    console.log(totalWeight/columns);

    return totalWeight / columns;
  }


  positionElements () {
    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;

    let currentElementsPerRow = 0;

    let rowLength = this.getRowLength();
    let elementPerRow = 0;
    let array = this.getList(rowLength);
    let currentElement = 0;

    for (let i = 0; i < array.length; i++) {
      let isFirstRow = (i === 0) ? true : false;
      let isLastRow = (i === array.length - 1) ? true : false;
      let eitherFirstOrLastRow = (isFirstRow || isLastRow) ? true : false;


      columnStart = 1;
      columnEnd = 2;
      rowStart = 1;

      elementPerRow = array[i]?.length;
      currentElementsPerRow = 0;

      while (elementPerRow > currentElementsPerRow) {
        const current = this.tagList[currentElement];
        const weight = current.weighting;
        let emptyRow = (currentElementsPerRow === 0) ? true : false;

        rowStart = i + 1;
        rowEnd = rowStart + 1;
        columnEnd = columnStart + weight;

        if (eitherFirstOrLastRow) {
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
      tag.weighting = Math.ceil(this.textElements[i].offsetWidth / avgOffsetWidth);
      this.tagList.push(tag);
    }
  }
}

export default TagCloud;
