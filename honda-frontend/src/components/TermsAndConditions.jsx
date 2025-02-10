import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold mb-4">
          TERMS & CONDITIONS
        </h1>
        <hr className="border-t-2 border-red-600 w-1/4 mx-auto mb-8" />
        <div className="text-sm leading-6 space-y-4">
          <p>
            I/We hereby agree that all personal or other information
            (information's) provided herein or otherwise may be used by the
            company for business purposes, service improvement, or the
            performance of any agreement between us, if any, and shall not be
            disclosed to any third party unless required by applicable laws,
            rules, and regulations or for the purposes herein mentioned. For the
            purposes stated herein, the above-mentioned information may be
            shared or transferred within the Company, its affiliates, or group
            entities within or outside India. All or any information, however,
            must be communicated, processed, or destroyed in accordance with
            applicable laws or in a manner that ensures its confidentiality.
          </p>
          <p>
            Furthermore, by giving notification to the Company, all or any of
            the information given above or otherwise can be withdrawn/corrected.
          </p>
          <p>
            The Company's Web sites contain information that has been developed
            and maintained by a range of internal and external sources. In no
            circumstances will the Company be liable, directly or indirectly,
            for any damage or loss caused or allegedly caused by or in
            connection with the use of or reliance on any such content available
            on or through any such site or resource.
          </p>
          <p className="font-bold">Link Disclaimer:</p>
          <p>
            Any links to external web sites, (i.e. other than the Company’s
            Websites) and any information which comes out of the web search
            engines are being provided as a courtesy and should not be construed
            as an endorsement or guarantee as to the correctness of such
            information or views at the linked sites by the Company.
          </p>
          <p className="font-bold">Product Disclaimer :</p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              “Product shown in picture may vary from actual product available
              in market”
            </li>
            <li>
              The technical specifications and design of the product shown may
              vary according to the requirements and conditions and are subject
              to change without any notice
            </li>
            <li>
              Accessories shown in the picture of the product are not a part of
              the standard equipment.
            </li>
          </ol>
          <p>
            In preview of the Telecom Regulatory Authority of India (TRAI)
            guidelines, I/We hereby authorize Honda Motorcycle & Scooter India
            Pvt. Ltd.its affiliates / partners / registered dealers, or
            otherwise who are accessing the data by virtue of their association
            with Honda Motorcycle & Scooter India Pvt. Ltd to communicate with
            me/us through telephone/mobile, Email, SMS or other modes of
            communication even if my/our number/numbers(s) is/are registered in
            the National Do Not Call Registry (NDNC) or{" "}
            <a
              href="http://www.nccptrai.gov.in"
              className="text-blue-600 underline"
            >
              www.nccptrai.gov.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
