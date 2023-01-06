// Disable button as JS loads
document.getElementById("submit").disabled = true;

function awaitObj() {
  if (PDFLib !== undefined) {
    return;
  } else {
    setTimeout(() => {
      awaitObj();
    }, 100);
  }
}
awaitObj();

// Make button available
document.getElementById("submit").disabled = false;

const { PDFDocument, StandardFonts, rgb } = PDFLib;

async function fillForm() {
  const formUrl = document
    .getElementById("pdfgen")
    .attributes.getNamedItem("document").value;
  const formName = document.getElementById("pdfgen").name;
  const formBytes = await fetch(formUrl).then((res) => res.arrayBuffer());

  const formData = new FormData(document.getElementById("pdfgen"));

  const pdfDoc = await PDFDocument.load(formBytes);
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const form = pdfDoc.getForm();

  const page = pdfDoc.getPage(0);

  const { width, height } = page.getSize();
  const fontSize = 11;

  page.drawText(formData.get("prenom"), {
    x: 78,
    y: height - 211,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("surnom"), {
    x: 78,
    y: height - 298,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("email"), {
    x: 78,
    y: height - 385,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  const id = formData.getAll("member-id");

  page.drawText(id[0], {
    x: 78,
    y: height - 472,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(id[1], {
    x: 236,
    y: height - 472,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(id[2], {
    x: 390,
    y: height - 472,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("street"), {
    x: 78,
    y: height - 550,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  const addtInfo =
    formData.get("addtinfo") === undefined ? "" : formData.get("addtinfo");

  page.drawText(addtInfo, {
    x: 312,
    y: height - 550,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("postal"), {
    x: 78,
    y: height - 598,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("city"), {
    x: 312,
    y: height - 598,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  page.drawText(formData.get("country"), {
    x: 78,
    y: height - 646,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  download(pdfBytes, formName, "application/pdf");
}
