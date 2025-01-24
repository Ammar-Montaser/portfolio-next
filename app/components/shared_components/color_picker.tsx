"use client";
import React from "react";
import reactCSS from "reactcss";
import { HuePicker } from "react-color";
import { AnimatePresence, motion } from "framer-motion";

class ColorPicker extends React.Component<{
  className?: string;
  height?: string;
  width?: string;
  hueClassName?: string;
  default?: boolean;
}> {
  state = {
    displayColorPicker: false,
    color: {
      r: "0",
      g: "255",
      b: "0",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({
      displayColorPicker: !this.state.displayColorPicker,
    });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color: { rgb: any }) => {
    this.setState({ color: color.rgb });
    document.body.style.setProperty(
      "--color",
      "rgba(" +
        this.state.color.r +
        "," +
        this.state.color.g +
        "," +
        this.state.color.b +
        "," +
        "1)"
    );
    document.body.style.setProperty(
      "--BG",
      "rgba(" +
        parseInt(this.state.color.r).toString() +
        "," +
        parseInt(this.state.color.g).toString() +
        "," +
        parseInt(this.state.color.b).toString() +
        "," +
        "0.4)"
    );
    //  --BG: rgba(3, 123, 47, 0.182);

    console.log(this.state.color);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: this.props.width,
          height: this.props.height,
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        //absolute z-10
      },
    });

    return (
      <div className="flex flex-col items-center duration-500">
        {this.state.displayColorPicker || this.props.default ? (
          <AnimatePresence>
            <motion.div
              className={this.props.className + ""}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div onClick={this.handleClose} />
              <HuePicker
                className={" duration-700  "}
                color={{
                  r: parseInt(this.state.color.r),
                  g: parseInt(this.state.color.g),
                  b: parseInt(this.state.color.b),
                  a: parseInt(this.state.color.a),
                }}
                onChange={this.handleChange}
                onChangeComplete={this.handleChange}
              />
            </motion.div>
          </AnimatePresence>
        ) : null}
        <div
          className="bg-gray-700 dark:bg-white/70"
          style={styles.swatch}
          onClick={this.handleClick}
        >
          <div className="" style={styles.color} />
        </div>
      </div>
    );
  }
}

export default ColorPicker;
