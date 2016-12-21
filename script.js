function generatePDF() {
  window.dronedeploy.Plans.getCurrentlyViewed()
  .then((res) => fetchTileDataFromPlan(res))
  .then((res) => getDataUrlViaCustomWebServer(res.tiles))
  .then((encoded_tiles) => {
    const docDefinition = generatePDFcontent(encoded_tiles);
    // decided to have client side PDF printing with the pure javascript module: pdfmake
    pdfMake.createPdf(docDefinition).open();
  })
  .catch(console.log);
}

function fetchTileDataFromPlan(plan) {
  // assumed the default layerName as 'ortho' and zoom level as 16
  return window.dronedeploy.Tiles.get({planId: String(plan.id), layerName: 'ortho', zoom: 16});
}

function getDataUrlViaCustomWebServer(tiles) {
  const webServerUrl = 'https://sample-app-server.herokuapp.com/getEncodedUrl/';
  const body = JSON.stringify({
    'tile': tiles
  })
  return fetch(webServerUrl, {
    method: 'POST',
    body: body
  })
  .then((res) => res.json())
  .then((rjson) => rjson.msg)
  .catch(console.log);
}

function generatePDFcontent(list) {
  let content = [{ text: 'Tile image(s) in PDF generated from DroneDeploy app made by Youngchan Je', style: 'header' }];
  const contentStyle = {
    header: {
      fontSize: 14,
      bold: true
    }
  };
  for (let i = 0; i < list.length; i++) {
    content.push({
      image: `data:image/jpeg;base64,${list[i]}`
    })
  }
  return (
    {
      content: content,
      styles: contentStyle
    }
  );
}
