// Disable button as JS loads
document.getElementById("submit").disabled = true;

function awaitObj() {
	if (PDFLib !== undefined) {
		return;
	} else {
		setTimeout(() => { awaitObj() }, 100);
	}
}
awaitObj();

// Make button available
document.getElementById("submit").disabled = false;

const { PDFDocument } = PDFLib;

async function fillForm() {
	const formUrl = document.getElementById("pdfgen").document;
	const formName = document.getElementById("pdfgen").name;
	const formBytes = await fetch(formUrl).then(res => res.arrayBuffer())

	const pdfDoc = await PDFDocument.load(formBytes)
	const form = pdfDoc.getForm()

	/* TODO: Programatically fill out form data */

	const pdfBytes = await pdfDoc.save()
	download(pdfBytes, formName, "application/pdf")
}
