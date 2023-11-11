function programmingBook(input) {

    let pagesCount = 899;
    let coversCount = 2;


    let pricePerPage = Number(input[0]);
    let pricePerCover = Number(input[1]);
    let discountPrintingPaperPercent = Number(input[2]);
    let priceDesigner = Number(input[3]);
    let teamPercentPaid = Number(input[4]);

    let startingSumPrinting = (pagesCount * pricePerPage) + (coversCount * pricePerCover);
    let withDiscount = startingSumPrinting - (startingSumPrinting * discountPrintingPaperPercent / 100);
    let withDesignerPrice = withDiscount + priceDesigner;
    
    let total = withDesignerPrice - (withDesignerPrice * teamPercentPaid / 100);
    console.log(`Avtonom should pay ${total.toFixed(2)} BGN.`);
}

programmingBook(['0.01','1','10','20','20']);