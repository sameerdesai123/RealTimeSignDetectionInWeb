const labelMap = {
    1:{name:'Hello', color:'red'},
    2:{name:'Vidya Jyothi Institute Of Technology', color:'yellow'},
    3:{name:'I Love You', color:'lime'},
    4:{name:'Thank You', color:'blue'},
    5:{name: 'More', color:'purple'},
    6:{name:'Best Of Luck', color:'green'},
    7:{name:'No', color:'grey'},
    8:{name:'Pray', color:'white'},
    9:{name:'Remember', color:'black'},
    10:{name: 'Nice', color: 'orange'},
    11:{name: 'Home', color: 'light-green'}
}

export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(i%10 === 0) {
            console.log("BOXES: ", boxes[i],"CLASSES: ", classes[i],"SCORE : ", scores[i]);
        }
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke()
        }
    }
}