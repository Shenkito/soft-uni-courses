function pcStore(input) {
    let priceProcessor = Number(input[0]);
    let priceVideocard = Number(input[1]);
    let priceRam = Number(input[2]);
    let discount = Number(input[4]);
    let countRam = Number(input[3]);

    let processorLeva = priceProcessor * 1.57;
    let videocardLeva = priceVideocard * 1.57;
    let ramLeva = priceRam * 1.57;

    let totalRam = ramLeva * countRam;

    let processorDiscount = processorLeva - (processorLeva * discount);
    let videocardDiscount = videocardLeva - (videocardLeva * discount);

    let total = processorDiscount + videocardDiscount + totalRam;
    
    console.log(`Money needed - ${total.toFixed(2)} leva.`);
    
}
pcStore([ '200', '100', '80', '1', '0.01' ]);