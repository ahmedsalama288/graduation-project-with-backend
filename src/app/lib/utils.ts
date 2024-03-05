export const getFirstSegment = (url: string): string => {
  // Remove leading and trailing slashes
  url = url.replace(/^\/|\/$/g, "");

  // Split the URL by slashes
  const segments = url.split("/");

  // Return the first segment
  return "/" + segments[0];
};

// Example usage
// const url = "/about-us/institute-management/chairman-of-board-of-directors";
// const firstSegment = getFirstSegment(url);
// console.log(firstSegment); // Output: "/about-us"
