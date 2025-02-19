import React, { useState } from "react";
import FlvPlayer from "../components/FlvPlayer";

// Define a constant array with stream URLs
const streamUrls = [
    "https://media11.ambicam.com/live/eb16387d-f219-4174-81ce-dfb4810315ad.flv",
    "https://media11.ambicam.com/live/374136bd-5705-433d-980a-66eb6d220965.flv",
    "https://media11.ambicam.com/live/c6ec3b79-e7f5-4919-8c0d-9bd0dc07540e.flv",
    "https://media11.ambicam.com/live/f91d629b-d974-4146-899f-f09dc6d8ecce.flv",
    "https://media11.ambicam.com/live/f0cd10be-f8e9-4bed-9a8a-10957917e5a8.flv",
    "https://media11.ambicam.com/live/cbadec78-7658-432f-8751-c59d5c96539c.flv",
    "https://media11.ambicam.com/live/3e54073f-a5d2-447e-b72e-88b827f07d4c.flv",
    "https://media11.ambicam.com/live/80b8cb2a-7182-4780-884d-51de80d38876.flv",
    "https://media11.ambicam.com/live/2e051326-6e00-44f6-853d-bbb3c413a0dd.flv",
    "https://media11.ambicam.com/live/d30df682-a6c2-4789-a99a-dd4e41e3dd6c.flv",
    "https://media11.ambicam.com/live/36fe6d1e-19c9-4d35-995c-7ea0298a1a0b.flv",
    "https://media11.ambicam.com/live/4b7f708f-3dde-4e72-9c57-d0879cbc792c.flv",
    "https://media11.ambicam.com/live/6dc02ca2-7d0b-45db-940e-eeb3049e5ea4.flv",
    "https://media11.ambicam.com/live/5be95d3a-a250-453e-b863-d59a454100a6.flv",
    "https://media11.ambicam.com/live/dcb45129-6a4b-48c5-a5d7-78a7f226bdfc.flv",
    "https://media11.ambicam.com/live/c375b207-fd00-4cb9-9d81-18112530391e.flv",
    "https://media11.ambicam.com/live/e11f2c38-47b8-4a53-b758-1b715a0df7b6.flv",
    "https://media11.ambicam.com/live/b8c6c785-32e5-4322-bc82-636cbe75f166.flv",
    "https://media11.ambicam.com/live/c76708fd-7346-4bd5-a920-5898f219a8fe.flv",
    "https://media11.ambicam.com/live/a52f4b4d-a9eb-4e4f-bbbd-e15cb54df8cc.flv",
    "https://media11.ambicam.com/live/614186f9-13be-42bf-9a9c-49e9909f6e9d.flv",
    "https://media11.ambicam.com/live/98cc1d1d-ed17-4b5b-a65a-6f4fbfc8e459.flv",
    "https://media11.ambicam.com/live/0bceefdf-f77e-402f-991e-53865fb0e561.flv",
    "https://media11.ambicam.com/live/3821b7e3-465d-4cd1-b643-8c81eef8cf16.flv",
    "https://media11.ambicam.com/live/675d0d69-ab34-4b6b-bf3b-2b444b5c2f30.flv",
    "https://media11.ambicam.com/live/259a5f2b-cfca-4796-864b-93c122b9ccef.flv",
    "https://media11.ambicam.com/live/c8bbda76-50f8-41f0-81eb-9640c4e4dd75.flv",
    "https://media11.ambicam.com/live/37af6209-9a0b-4c3d-8c32-19fe55f1e48c.flv",
    "https://media11.ambicam.com/live/b3b1d27b-de83-4900-ad30-b138e93a4805.flv",
    "https://media11.ambicam.com/live/92826931-086d-43ff-9293-f90a250d2844.flv",
    "https://media11.ambicam.com/live/7dcd76d7-48a7-4fe8-a2de-51f741eb2b03.flv",
    "https://media11.ambicam.com/live/9eaefd97-fc39-43f7-8673-9e12755925cb.flv",
    "https://media11.ambicam.com/live/9b22d5ce-b898-4ba9-9a4f-a84496b8dbf2.flv",
    "https://media11.ambicam.com/live/4e319f08-e24c-4539-b0eb-74517bd0594c.flv",
    "https://media11.ambicam.com/live/f5d66a48-f4c8-4436-a9ae-cda9c125f414.flv",
    "https://media11.ambicam.com/live/4582a642-21d7-42a0-b8ca-bb72ddeb9b4c.flv",
    "https://media11.ambicam.com/live/ecd153cc-44ad-439f-86cc-18cc0bbe518b.flv",
    "https://media11.ambicam.com/live/f3221029-f83c-42ac-87f6-d5311a5bbc32.flv",
    "https://media11.ambicam.com/live/07ad244a-c674-4d98-8452-9b1114b83c66.flv",
    "https://media11.ambicam.com/live/cd2e06dd-910d-42f4-8863-13b9a6752307.flv",
    "https://media11.ambicam.com/live/239e194a-e274-4a70-8a92-56309d9d3049.flv",
    "https://media11.ambicam.com/live/59ab221c-2852-482b-aa59-96a400dc05d2.flv",
    "https://media11.ambicam.com/live/659815f9-c138-4039-b30c-35cda1336a10.flv",
    "https://media11.ambicam.com/live/aac67ff6-c6d4-43c2-9766-0d80c122b9d3.flv",
    "https://media11.ambicam.com/live/5c6c1ff4-5bf8-485c-8264-bbfe41f024c7.flv",
    "https://media11.ambicam.com/live/00508e3a-5a82-4912-bb7b-8fe44ded409e.flv",
    "https://media11.ambicam.com/live/8544a561-1c59-46e9-8594-ec988d58f007.flv",
    "https://media11.ambicam.com/live/97447070-85fe-4cbd-816c-03d9725ae265.flv",
    "https://media11.ambicam.com/live/22ac3f7a-9715-4936-ae83-451733772e14.flv",
    "https://media11.ambicam.com/live/f0c6d3ad-d119-483f-8fef-15e4ed50355c.flv",
    "https://media11.ambicam.com/live/e9fd8e8a-c896-4e74-8aa2-2869a413beab.flv",
    "https://media11.ambicam.com/live/e441aa6b-44ea-46ee-bb9c-7196f8b4a2eb.flv",
    "https://media11.ambicam.com/live/c1483742-2c64-4aba-9a66-4595e36886ea.flv",
    "https://media11.ambicam.com/live/2e015b71-c3e8-4567-9a25-05cb5ef560af.flv",
    "https://media11.ambicam.com/live/a39df2df-c556-41d8-a1d5-454a143f6803.flv",
    "https://media11.ambicam.com/live/fc1ba99e-632a-4615-b3ef-17d1b9e4b78d.flv",
    "https://media11.ambicam.com/live/86a921d1-6568-48d5-8f4f-b2e29f121314.flv",
    "https://media11.ambicam.com/live/80b341cd-1127-468b-86a2-b38479febc58.flv",
    "https://media11.ambicam.com/live/fa41ba35-41d7-4fa6-91db-a6dd2b68b326.flv",
    "https://media11.ambicam.com/live/7c8631b8-9f66-42db-90b5-ba4dda145151.flv",
    "https://media11.ambicam.com/live/a553a56f-39ee-4880-8c58-fdd1b7ceaa66.flv",
    "https://media11.ambicam.com/live/231619af-a067-46ef-b63f-1b2f46457273.flv",
    "https://media11.ambicam.com/live/21594b1b-2a00-423a-a712-8893602960f0.flv",
    "https://media11.ambicam.com/live/82807574-5d9b-4ed9-b769-bd6ef5c4356d.flv",
    "https://media11.ambicam.com/live/9d29b792-b035-47ae-8697-fd2ada240576.flv",
    "https://media11.ambicam.com/live/24f0aa04-a1b9-462b-a324-13e214478eac.flv",
    "https://media11.ambicam.com/live/14bcb388-dd45-4c1d-a1a4-840b48627802.flv",
    "https://media11.ambicam.com/live/040231b5-4dac-443d-bcec-039314d84811.flv",
    "https://media11.ambicam.com/live/12933eb2-c5c9-49ce-9a51-4c94e1484b6b.flv",
    "https://media11.ambicam.com/live/09d455de-7e43-403c-9898-9c7e3716b09e.flv",
    "https://media11.ambicam.com/live/0846574c-f965-45be-a51f-ab81f8041cf2.flv",
    "https://media11.ambicam.com/live/a11cb33e-b521-466d-a391-05e1ce6a4470.flv",
    "https://media11.ambicam.com/live/d8e438e9-8bfc-48d9-8c64-9ba05841524a.flv",
    "https://media11.ambicam.com/live/e7b06ab7-6aa4-40c7-9c62-8afe4d5b405f.flv",
    "https://media11.ambicam.com/live/d0c6019c-40b2-4517-8431-d9f74a53bf49.flv",
    "https://media11.ambicam.com/live/2f6f55ee-073f-4809-bf87-49dcc8c47fd8.flv",
    "https://media11.ambicam.com/live/42577874-775a-41c5-a055-93724a0df06a.flv",
    "https://media11.ambicam.com/live/b2d72924-75e3-47a2-b871-635396b79a96.flv",
    "https://media11.ambicam.com/live/6e5a1737-0815-47fc-9a80-4ab9c46caaa1.flv",
    "https://media11.ambicam.com/live/244b0f74-5ce4-4ca9-9da5-60d84d8a47e2.flv",
    "https://media11.ambicam.com/live/5c9110bd-6781-46b5-96e6-f835ee1ce211.flv",
    "https://media11.ambicam.com/live/8b5062b6-a217-4909-a80b-418a7a089641.flv",
    "https://media11.ambicam.com/live/38a8087c-6e31-4cdb-b44b-63d225221ae2.flv",
    "https://media11.ambicam.com/live/c8290668-c486-46c5-ab04-775542794fe3.flv",
    "https://media11.ambicam.com/live/29ed8249-2459-4571-8992-98f9415cdd1b.flv",
    "https://media11.ambicam.com/live/abff058c-d19d-4a1b-83a2-ecb7ac0d165c.flv",
    "https://media11.ambicam.com/live/be162b53-2b40-4d06-9cf4-fb7e502ae7a9.flv",
    "https://media11.ambicam.com/live/7a5b84e9-e66f-46ba-890e-a9d5f51a4c18.flv",
    "https://media11.ambicam.com/live/bd3ed35e-679e-4f12-9b7b-37836ccfb303.flv",
    "https://media11.ambicam.com/live/464a3232-2d03-4bf3-8dfa-bac1d17abd9b.flv",
    "https://media11.ambicam.com/live/9cd7caf7-1f97-40bb-acdc-000ac3f8c505.flv",
    "https://media11.ambicam.com/live/20eee032-3bf7-4238-b082-05c7394581ad.flv",
    "https://media11.ambicam.com/live/c8bbda76-50f8-41f0-81eb-9640c4e4dd75.flv",
    "https://media11.ambicam.com/live/1ef2985e-1fd8-4dbd-8af7-9aa52ac40fad.flv",
    "https://media11.ambicam.com/live/cbadec78-7658-432f-8751-c59d5c96539c.flv",
    "https://media11.ambicam.com/live/bc9f47b4-528f-4241-b38b-e64767911191.flv",
    "https://media11.ambicam.com/live/be162b53-2b40-4d06-9cf4-fb7e502ae7a9.flv",
    "https://media11.ambicam.com/live/744a80ac-44d3-49d1-b3ef-d9687a1f7403.flv",
    "https://media11.ambicam.com/live/a52f4b4d-a9eb-4e4f-bbbd-e15cb54df8cc.flv",
    "https://media11.ambicam.com/live/3bb87a98-badd-4bff-8fcf-5239c0e55a66.flv",
    "https://media11.ambicam.com/live/f16f1f52-185b-42b2-b861-34aa7d02694b.flv",
    "https://media11.ambicam.com/live/80b341cd-1127-468b-86a2-b38479febc58.flv",
    "https://media11.ambicam.com/live/9fe73865-b405-4f0e-ad79-04720e03b2f7.flv",
    "https://media11.ambicam.com/live/a553a56f-39ee-4880-8c58-fdd1b7ceaa66.flv",
    "https://media11.ambicam.com/live/d051948e-9533-4fec-9bf1-bc126de7c8a0.flv",
    "https://media11.ambicam.com/live/e441aa6b-44ea-46ee-bb9c-7196f8b4a2eb.flv",
    "https://media11.ambicam.com/live/5a2b9fc3-2620-42bc-8601-29b516466aba.flv",
    "https://media11.ambicam.com/live/51ed7d1c-09ed-4792-b42d-371108252ef8.flv",
    "https://media11.ambicam.com/live/4b7f708f-3dde-4e72-9c57-d0879cbc792c.flv",
    "https://media11.ambicam.com/live/d7045e2b-cd9c-4667-8401-2ebf71001489.flv",
    "https://media11.ambicam.com/live/f0cd10be-f8e9-4bed-9a8a-10957917e5a8.flv",
    "https://media11.ambicam.com/live/2e051326-6e00-44f6-853d-bbb3c413a0dd.flv",
    "https://media11.ambicam.com/live/37af6209-9a0b-4c3d-8c32-19fe55f1e48c.flv",
    "https://media11.ambicam.com/live/d30df682-a6c2-4789-a99a-dd4e41e3dd6c.flv",
    "https://media11.ambicam.com/live/8b5062b6-a217-4909-a80b-418a7a089641.flv",
    "https://media11.ambicam.com/live/00ee88d5-946b-4638-8133-25dfe59e4f47.flv",
    "https://media11.ambicam.com/live/60f113e2-c2f3-4881-a7ba-c9a8c62a5b48.flv",
    "https://media11.ambicam.com/live/8d1f0b0c-3fdc-48f3-be9e-b228f8d8409a.flv",
    "https://media11.ambicam.com/live/dc8fd1fb-8b8e-4615-bb5c-5f204a20a0fa.flv",
    "https://media11.ambicam.com/live/9cd7caf7-1f97-40bb-acdc-000ac3f8c505.flv",
    "https://media11.ambicam.com/live/374136bd-5705-433d-980a-66eb6d220965.flv",
    "https://media11.ambicam.com/live/54b2323a-03f6-40af-beff-8ff06c25c4ef.flv",
    "https://media11.ambicam.com/live/b79d3847-83cc-42fd-a0a7-bb518931c3c5.flv",
    "https://media11.ambicam.com/live/77ac55a4-98e2-4371-80be-3b94d03bc011.flv",
    "https://media11.ambicam.com/live/9f217b5f-407a-4e6c-a981-1304c48ab82a.flv",
    "https://media11.ambicam.com/live/231619af-a067-46ef-b63f-1b2f46457273.flv",
    "https://media11.ambicam.com/live/02567ee3-7343-4335-958a-63a9fa6e64ca.flv",
    "https://media11.ambicam.com/live/87e09403-6bb1-4e9f-a0dd-3db0e7e3b5b1.flv",
    "https://media12.ambicam.com/dvr1/77e0bc0e-9740-451a-917a-5ea200f0b2e1.flv",
    "https://media12.ambicam.com/dvr1/84227722-0b24-4bcd-b5e2-7975f59f6936.flv",
    "https://media12.ambicam.com/dvr1/c740102c-a18b-4774-a25b-e993564f7c55.flv",
    "https://media12.ambicam.com/dvr1/8015110d-fdfc-49a1-9183-907ecc5e28fa.flv",
    "https://media12.ambicam.com/dvr1/f5811819-3af4-4c99-8b6d-9e2bbcf888c0.flv",
    "https://media12.ambicam.com/dvr1/e81220c1-d57e-4a1d-a92b-52242ec3d4d4.flv",
    "https://media12.ambicam.com/dvr1/844c2504-07a2-4e3b-91b9-99ad2f611a6f.flv",
    "https://media12.ambicam.com/dvr1/70566d56-4592-44a7-a846-e1aef04340fc.flv",
    "https://media12.ambicam.com/dvr1/bc076b9b-fe22-462e-ac61-8b71a8bc29e4.flv",
    "https://media12.ambicam.com/dvr1/aaad0031-e5d8-4e01-a424-83dae0af9e0d.flv",
    "https://media12.ambicam.com/dvr1/eac7c7df-72e5-4aae-b73d-2b5863e83a91.flv",
    "https://media12.ambicam.com/dvr1/5c42ccb3-a861-48c8-abc1-5555918819d7.flv",
    "https://media12.ambicam.com/dvr1/43c5ff24-8990-48b5-9fb2-198f2cae8368.flv",
    "https://media12.ambicam.com/dvr1/1cc024f1-15d1-4e7d-96ce-cca8f2376b39.flv",
    "https://media12.ambicam.com/dvr1/7ac601a4-3ce9-47ac-b327-25daaed28240.flv",
    "https://media12.ambicam.com/dvr1/e60aa881-058f-4d18-abb2-c8027eb09d09.flv",
    "https://media12.ambicam.com/dvr1/fb46fcd0-857d-434a-8b3b-f1df2adb08ec.flv",
    "https://media12.ambicam.com/dvr1/10c16017-2218-459c-a974-f47dc4b5404b.flv",
    "https://media12.ambicam.com/dvr1/f057d543-6231-4d33-959a-0226d6d21a60.flv",
    "https://media11.ambicam.com/live/4b7f708f-3dde-4e72-9c57-d0879cbc792c.flv",
    "https://media11.ambicam.com/live/d7045e2b-cd9c-4667-8401-2ebf71001489.flv",
    "https://media11.ambicam.com/live/f0cd10be-f8e9-4bed-9a8a-10957917e5a8.flv",
    "https://media11.ambicam.com/live/2e051326-6e00-44f6-853d-bbb3c413a0dd.flv",
    "https://media11.ambicam.com/live/37af6209-9a0b-4c3d-8c32-19fe55f1e48c.flv",
    "https://media11.ambicam.com/live/d30df682-a6c2-4789-a99a-dd4e41e3dd6c.flv",
    "https://media11.ambicam.com/live/8b5062b6-a217-4909-a80b-418a7a089641.flv",
    "https://media11.ambicam.com/live/00ee88d5-946b-4638-8133-25dfe59e4f47.flv",
    "https://media11.ambicam.com/live/60f113e2-c2f3-4881-a7ba-c9a8c62a5b48.flv",
    "https://media11.ambicam.com/live/8d1f0b0c-3fdc-48f3-be9e-b228f8d8409a.flv",
    "https://media11.ambicam.com/live/dc8fd1fb-8b8e-4615-bb5c-5f204a20a0fa.flv",
    "https://media11.ambicam.com/live/9cd7caf7-1f97-40bb-acdc-000ac3f8c505.flv",
    "https://media11.ambicam.com/live/374136bd-5705-433d-980a-66eb6d220965.flv",
    "https://media11.ambicam.com/live/54b2323a-03f6-40af-beff-8ff06c25c4ef.flv",
    "https://media11.ambicam.com/live/eb16387d-f219-4174-81ce-dfb4810315ad.flv",
    "https://media11.ambicam.com/live/374136bd-5705-433d-980a-66eb6d220965.flv",
    "https://media11.ambicam.com/live/c6ec3b79-e7f5-4919-8c0d-9bd0dc07540e.flv",
    "https://media11.ambicam.com/live/f91d629b-d974-4146-899f-f09dc6d8ecce.flv",
    "https://media11.ambicam.com/live/f0cd10be-f8e9-4bed-9a8a-10957917e5a8.flv",
    "https://media11.ambicam.com/live/cbadec78-7658-432f-8751-c59d5c96539c.flv",
    "https://media11.ambicam.com/live/3e54073f-a5d2-447e-b72e-88b827f07d4c.flv",
    "https://media11.ambicam.com/live/80b8cb2a-7182-4780-884d-51de80d38876.flv",
    "https://media11.ambicam.com/live/2e051326-6e00-44f6-853d-bbb3c413a0dd.flv",
    "https://media11.ambicam.com/live/d30df682-a6c2-4789-a99a-dd4e41e3dd6c.flv",
    "https://media11.ambicam.com/live/36fe6d1e-19c9-4d35-995c-7ea0298a1a0b.flv",
    "https://media11.ambicam.com/live/4b7f708f-3dde-4e72-9c57-d0879cbc792c.flv",


];

const STREAMS_PER_PAGE = 6;
const StreamPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the streams to display based on the current page
    const startIndex = (currentPage - 1) * STREAMS_PER_PAGE;
    const currentStreams = streamUrls.slice(startIndex, startIndex + STREAMS_PER_PAGE);

    // Calculate total pages
    const totalPages = Math.ceil(streamUrls.length / STREAMS_PER_PAGE);

    // Handle page change
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    return (
        <div style={{ padding: "20px" }}>
            <h1>FLV Stream Player - 6 Players</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridTemplateRows: "repeat(2, 1fr)",
                    gap: "20px",
                }}
            >
                {/* Render the streams for the current page */}
                {currentStreams.map((url, index) => (
                    <div key={index} style={{ width: "100%", height: "auto" }}>
                        <FlvPlayer url={url} />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default StreamPage;
