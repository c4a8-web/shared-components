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


  /*applyValue (colStart, colEnd, rowStart, rowEnd) {
    for (let i = 0; i < this.items.length; i++) {
      const current = this.tagList[i];
      const weight = Math.ceil(current.weighting);

      rowEnd = rowStart + 1;
      colEnd = colStart + weight;

      this.tagList[i].rowLen = colEnd - colStart

      colStart += weight;
    }

    console.log(this.tagList);
  }*/

  getList (rowLength) {
    let itemsArray = [];
    for (let j = 0; j < rowLength; j++) {
      itemsArray.push([]);
    }

    for (let j = 0; j < rowLength; j++) {
      let weight = 0;
      for (let i = 0; i < this.tagList.length; i++) {
        console.log('weight: ', weight);
        if ((j == 0 && weight < 3) || (j == rowLength -1 && weight < 3)) {
          itemsArray[j].push(this.tagList[i]);
          weight += this.tagList[i].weighting;
        } else if ((j != 0 || j != rowLength -1)) {
          itemsArray[j].push(this.tagList[i]);
          weight += this.tagList[i].weighting;
        }
      }
    }
    console.log('Array: ', itemsArray)
  }

  //slightly improve
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
