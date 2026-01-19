import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const downloadStudentsPDF = () => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  autoTable(doc, {
    html: "#my-table",
    

    styles: {
      fontSize: 9,
      cellPadding: 4,
    },

    columnStyles: {
      0: { cellWidth: 40 },   // SNo
      1: {                   // UserName
        cellWidth: 180,
        overflow: "linebreak",
      },
      2: { cellWidth: 100 },   // Gender
      3: { cellWidth: 90 },   // DOB
      4: {                   // Phone
        cellWidth: 100,
        overflow: "hidden",  // ❌ wrap band
      },
      5: {                   // Email
        cellWidth: 130,
        overflow: "linebreak",
      },
      6: { cellWidth: 50 },   // Status
      7: { cellWidth: 0 },   // Action
      
    },

  });

  doc.save("students-report.pdf");
};

export default downloadStudentsPDF;
