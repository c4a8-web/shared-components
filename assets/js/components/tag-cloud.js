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
    this.getList(this.getRowLength());
    //this.weightingElement();
    //this.positionElements();
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
    }
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

    return totalWeight / columns;
  }


  positionElements () {
    let columnStart = 1;
    let columnEnd = 2;
    let rowStart = 1;
    let rowEnd = 2;

    let rowLength = this.getRowLength();
    let colLength = 5;

    console.log('Row and Col Length: ', rowLength, colLength);
    console.log('taglist: ', this.tagList);

    for (let i = 0; i < this.items.length; i++) {
      const current = this.tagList[i];
      const weight = current.weighting;

      rowEnd = rowStart + 1;
      columnEnd = columnStart + weight;


      if (columnEnd > rowLength) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }

      if (rowStart === 1 && columnStart === 1) {
        columnStart = 2;
        columnEnd = columnStart + weight;
      }

      if (rowStart === 1 && columnEnd >= rowLength - 1) {
        rowStart += 1;
        columnStart = 1;
        columnEnd = columnStart + weight;
      }
      if (rowStart >= colLength && columnStart == 1 ) {
        columnStart += 1;
        columnEnd = columnStart + weight;
      }

      /*if (rowStart >= colLength && columnEnd >= rowLength) {
        colLength += 1;
        rowStart += 1;
        columnStart = colLength;
        columnEnd = columnStart + weight;
      }*/

      this.items[i].style = `grid-area: ${rowStart} / ${columnStart} / ${rowEnd} / ${columnEnd};`;

      columnStart += weight;

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



// Alternative

// instead of grid ul, grid divs
// we can justiyfy the grid
