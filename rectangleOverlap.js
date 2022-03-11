//Given the coordinates of two rectangles, return the area of any overlap
//All rectangles will be positioned in the first quadrant
//All rectangles will be square to the grid
//rectangle 1 will always be the more left/lower rectangle
//Some rectangles may not overlap; return false

function rectangleOverlap(rect1, rect2){
    //we need to find the width and length of the overlapping area
    //let's find out if they overlap at all
    //if the either x coordinate of rectangle 2 falls between the x coords of rectangle 1
    if(rect1[0][0]<=(rect2[0][0] || rect2[1][0]) && (rect2[0][0] || rect2[1][0])<=rect1[1][0]){
        //then we know they overlap widths
        console.log("they overlap widths")
        if(rect1[0][1]<=(rect2[0][1] || rect2[1][1]) && (rect2[0][1] || rect2[1][1])<=rect1[1][1]){
            console.log("they overlap heights")
            //establish variables for the positional elements of overlapping rectangle
            //could also let overlap = [[],[]] and assign values to mimick data structure of original rectangles
            let rightWidth;
            let leftWidth;
            let topHeight;
            let bottomHeight;
            //we now know that they overlap both width and height. time to find those numbers
            //find the lesser of the right edges
            if(rect1[1][0]<=rect2[1][0]){
                rightWidth = rect1[1][0]
            } else{
                rightWidth = rect2[1][0]
            }
            //find the greater of the left edges
            if(rect1[0][0]>=rect2[0][0]){
                leftWidth = rect1[0][0]
            } else{
                leftWidth = rect2[0][0]
            }
            //find the lesser of the max heights
            if(rect1[1][1]<=rect2[1][1]){
                topHeight = rect1[1][1]
            } else{
                topHeight = rect2[1][1]
            }
            //find the greater of the min heights
            if(rect1[0][1]>=rect2[0][1]){
                bottomHeight = rect1[0][1]
            } else{
                bottomHeight = rect2[0][1]
            }

            console.log({rightWidth})
            console.log({leftWidth})
            console.log({topHeight})
            console.log({bottomHeight})

            //establishing data of overlap in the same data structure as inputs
            let overlap = [[],[]];
            overlap[0][0] = leftWidth;
            overlap[1][0] = rightWidth;
            overlap[0][1] = bottomHeight;
            overlap[1][1] = topHeight;
            console.log({overlap});

            let overlapWidth = (rightWidth-leftWidth)
            let overlapHeight = (topHeight-bottomHeight)
            let area = (overlapWidth*overlapHeight)
            console.log({area})
            return area;
        }
        else{
            console.log("they don't overlap heights")
            return false;
        }
    }
    else{
        console.log("they don't overlap widths")
        return false;
    }
}

// const rectangle1 = [[2,1],[5,5]]
// const rectangle2 = [[3,2],[5,7]]

const rectangle1 = [[1,1],[7,6]]
const rectangle2 = [[5,1],[7,9]]

rectangleOverlap(rectangle1, rectangle2);
