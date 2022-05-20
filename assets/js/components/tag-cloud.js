import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);

    this.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
    this.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame
  }

  cloud(id, opt){
    /* Calculus */
    //matrix template
    function Matrix3(a) {
      this[1] = {1: a[0], 2: a[1], 3: a[2]};
      this[2] = {1: a[3], 2: a[4], 3: a[5]};
      this[3] = {1: a[6], 2: a[7], 3: a[8]};
    }

    let m3p = Matrix3.prototype;

    //matrix rotation
    Matrix3.Rotation = function(angle, u) {
      let sin_a = Math.sin(angle),
          cos_a = Math.cos(angle),
          mcos_a = 1 - cos_a,
          xy = u.x * u.y,
          xz = u.x * u.z,
          yz = u.y * u.z,
          x2 = u.x + u.x,
          y2 = u.y + u.y,
          z2 = u.z + u.z;
      return new Matrix3([
        cos_a + x2 * mcos_a, xy * mcos_a - u.z * sin_a, xz * mcos_a + u.y * sin_a,
        xy * mcos_a + u.z * sin_a, cos_a + y2 * mcos_a, yz * mcos_a - u.x * sin_a,
        xz * mcos_a - u.y * sin_a, yz * mcos_a + u.x * sin_a, cos_a + z2 * mcos_a]);
  }
    //matrix vector multiplication
    m3p.mul_v = function(v) {
      let result = [], i;

      for (i = 1; i <= 3; i++) {
        result[i - 1] = v[0] * this[i][1] + v[1] + this[i][2] * v[2] + this[i][3];
      }

      return result;
    };

    Matrix3.rotate_pts = function(rot_m, pts) {
      let l = pts.length,
          i = l;

      while (i--) {
        pts[i] = rot_m.mul_v(pts[i]);
      }

      return pts;
    };
    //vector template
    function Vector3(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    let v3p = Vector3.prototype;
    //vector length
    v3p.length = function() {
      let x2 = this.x * this.x,
          y2 = this.y * this.y,
          z2 = this.z * this.z;

      return Math.sqrt(x2 + y2 + z2);
    }
    //vector cross product
    v3p.cross = function(v) {
      return new Vector3(
        this.y * v.z - this.z * v.y,
        this.z * v.x - this.x * v.z,
        this.x * v.y - this.y * v.x
      );
    }
    //normalized vector
    v3p.normalized = function() {
      let l = this.length();
      return new Vector3(this.x / l, this.y / l, this.z / l);
    }

    /* Webpage Elements */

    function getOffset(elem) {
      if (elem.getBoundingClientRect) {
        return getOffsetRect(elem);
      } else {
        return getOffsetSum(elem);
      }
    }

    function getOffsetSum(elem) {
      let top = 0, left = 0;

      while (elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;
      }

      return {top: top, left: left};
    }

    function getOffsetRect(elem) {
      let box = elem.getBoundingClientRect(),
          body = document.body,
          docElem = document.documentElement,
          scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
          scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
          clientTop = docElem.clientTop || body.clientTop || 0,
          clientLeft = docElem.clientLeft || body.clientLeft || 0,
          top = box.top + scrollTop - clientTop,
          left = box.left + scrollLeft - clientLeft;

      return {top: Math.round(top), left: Math.round(left)};
    }

    // default value change to class attributes later
    let def = {
      radius_x: 100,
      radius_y: 100,
      radius_z: 100,
      radius_stop: 0.2,

      scale_max: 1,
      scale_min: 0.5,
      scale_steps: 50,

      opacity_max: 1,
      opacity_min: 0.5,
      opacity_steps: 20,
    };

    let cloud = document.getElementById(id),
        cloud_coord = getOffset(cloud),
        cloud_width = cloud.offsetWidth,
        cloud_height = cloud.offsetHeight,
        max_v = Math.sqrt(cloud_width * cloud_width + cloud_height * cloud_height)/2,
        elements = cloud.querySelectorAll('.tag-cloud-items'),
        num_of_el = elements.length,
        el_coord = pointsOnSphere(num_of_el, def.radius_x, def.radius_y, def.radius_z);

    let sc = {
          step: (def.scale_max - def.scale_min) / def.scale_steps,
          z_step: 2*def.radius_z / def.scale_steps,
          arr: new Array(num_of_el)
        },
        op = {
          step: (def.opacity_max - def.opacity_min) / def.opacity_steps,
          z_step: 2*def.radius_z / def.opacity_steps,
          arr: new Array(num_of_el)
        },
        stop = {
          x: def.radius_stop * def.radius_x,
          y: def.radius_stop * def.radius_y,
        };

    let axis = new Vector3(0, 0, 1), angle = 0, v_l = 0, anim_id;
    // creates points/vectors on a sphere
    function pointsOnSphere(n, xr, yr, zr) {
      let points = [],
          inc = Math.PI * (3 - Math.sqrt(5)),
          off = 2/n,
          i, y, r, phi;

      for(i = 0; i < n; i++) {
        y = i * off - 1 + (off / 2);
        r = Math.sqrt(1 - y * y);
        phi = i * inc;
        points.push(new Vector3(Math.cos(phi) * r * xr, y * yr, Math.sin(phi) * r * zr));
      }

      return points;
    }

    function scaling(obj, steps, min) {
      let min_z = -def.radius_z, i, j;

      for (i = 0; i < num_of_el; ++i) {
        for (j = 0; j <= steps; ++j) {
          if (el_coord[i][2] <= min_z + j * obj.z_step) {
            obj.arr[i] = min + j * obj.step;
            break;
          }
        }
      }
    }
    function generateScale(i) {
      return 'scale('+sc.arr[i]+')';
    }

    function generateTranslate(i) {
      var el_w2 = elements[i].offsetWidth/2,
          el_h2 = elements[i].offsetHeight/2,
          w2 = cloud_width/2,
          h2 = cloud_height/2;

      return 'translate3d('+((w2 + el_coord[i][0] - el_w2) | 0)+'px,'+((h2 + el_coord[i][1] - el_h2) | 0)+'px), '+ el_coord[i][0] +'px)';
    }

    function setTransform(i, value) {
      let el = elements[i];

      el.style.webkitTransform = value;
      el.style.mozTransform = value;
      el.style.msTransform = value;
      el.style.oTransform = value;
      el.style.transform = value;
    }

    function setOpacity(i) {
      let el = elements[i];
      el.style.opacity = op.arr[i];
    }

    function setRequiredStyles() {
      let i = num_of_el;

      cloud.style.overflow = 'hidden';

      while(i--) {
        elements[i].style.positoin = 'absolute';
      }
    }

    function draw() {
      let i = num_of_el,
          value;
      scaling(sc, def.scale_steps, def.scale_min);
      scaling(op, def.opacity_steps, def.opacity_min);

      while(i--) {
        value = generateTranslate(i) + ' ' + generateScale(i);
        setTransform(i, value);
        setOpacity(i);
      }
    }

    function recount(e) {
      let evt = e || window.event,
          x = evt.clientX - cloud_coord.left - cloud_width/2,
          y = evt.clientY - cloud_coord.top - cloud_height/2,
          cursor_v = new Vector3(x, y, 0);

      v_l = (Math.abs(x) < stop.x && Math.abs(y) < stop.y) ? 0 : cursor_v.length()/max_v;

      calculateAngle();
      axis = cursor_v.cross(new Vector3(0, 0, 1)).normalized();
    }

    function calculateAngle() {
      angle = Math.PI * v_l/90;

    }

    function rotate() {
      let rm;

      if (angle) {
        rm = Matrix3.Rotation(angle, axis);
        el_coord = Matrix3.rotate_pts(rm, el_coord);
      }
    }

    function redraw() {
      anim_id = requestAnimationFrame(redraw);

      rotate();
      draw();
    }

    function damping() {
      anim_id = requestAnimationFrame(damping);
      if(v_l > 0.01) {
        v_l *= 0.9;
        calculateAngle();
      } else {
        cancelAnimationFrame(anim_id);
      }

      rotate();
      draw();
    }

    setRequiredStyles();

    cloud.addEventListener('mousemove', recount, false);
    cloud.addEventListener('mouseleave', function() {
      cancelAnimationFrame(anim_id);
      damping();
    }, false);
    cloud.addEventListener('mouseenter', function() {
      cancelAnimationFrame(anim_id);
      redraw();
    }, false);

    draw();
  }
}

export default TagCloud;
