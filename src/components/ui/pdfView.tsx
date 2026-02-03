export default function PdfViewer() {
  return (
    <div className="w-full h-[800px] border border-gray-700 rounded-lg overflow-hidden">
      <iframe
        src="/Emmanouil_Vettas_CV.pdf"
        className="w-full h-full"
        title="PDF Viewer"
      />
    </div>
  );
}