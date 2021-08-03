class AnimationManager {
  constructor(charRefs) {
    this.references = charRefs;
    this.totalRefs = this.references.length;
    this.lastIndex = this.totalRefs - 1;
    this.counter = null;
    this.directionChange = false;
  }

  startEngine = () => {
    this.counter = this.lastIndex;
    this.engine(this.counter, -1);
  }

  engine = (index, direction) => {
    const self = this;
    const opacity = direction > 0 ? 1 : 0;
    this.mutateChar(index,opacity).then(() => {
        self.counter = self.counter + direction;
        if(self.counter < 0){
          self.counter = 0;
          self.engine(self.counter, 1);
        } else if(self.counter > self.lastIndex) {
          self.counter = self.lastIndex;
          self.engine(self.counter, -1);
        } else {
          self.engine(self.counter, direction);
        }
    });
  }

  mutateChar = (index, opacity) => {
    let self = this;
    let targetRef = this.references[index];
    return new Promise(function(resolve, reject) { 
      setTimeout(() => {
          targetRef.style.opacity = opacity;
          resolve();
      }, self.randomRange(50,400))
    });
  }

  randomRange = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default AnimationManager;