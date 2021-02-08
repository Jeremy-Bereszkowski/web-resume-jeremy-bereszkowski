// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const infoColor = [
  "#00acc1",
  "#26c6da",
  "#00acc1",
  "#00d3ee",
  "#d9edf7",
  "#c4e3f3",
  "#b2ebf2",
  "#4dd0e1"
];
const grayColor = [
  "#999",
  "#3C4858",
  "#eee",
  "#343434",
  "#585858",
  "#232323",
  "#ddd",
  "#6c757d",
  "#333",
  "#212121",
  "#777",
  "#D2D2D2",
  "#AAA",
  "#495057",
  "#e5e5e5",
  "#555",
  "#f9f9f9",
  "#ccc",
  "#444",
  "#f2f2f2",
  "#c0c1c2",
  "#9a9a9a",
  "#f5f5f5",
  "#505050",
  "#1f1f1f"
];
const whiteColor = "#FFF";
const blackColor = "#000";

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

export {
  //variables
  defaultFont,
  infoColor,
  grayColor,
  whiteColor,
  blackColor,
  hexToRgb
};
