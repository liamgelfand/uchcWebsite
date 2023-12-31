import React, { useState, useEffect } from 'react';
import styles from './styles/Testing.module.css';


function Testing() {


  // State for gene dropdown
  const [geneValue, setGeneValue] = useState('');

  // State for inCITE dropdown
  const [inCITEValue, setInCITEValue] = useState('');

  const [apiResponse, setApiResponse] = useState(''); 


  // State for disease checkboxes
  const [diseaseCheckboxes, setDiseaseCheckboxes] = useState({
    healthyYoung: false,
    healthyOld: false,
    alzheimers: false,
    als: false,
    ftd: false,
  });


  // Handler function for updating the checked status of disease checkboxes
  const handleDiseaseCheckboxChange = (disease) => {
    setDiseaseCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [disease]: !prevCheckboxes[disease],
    }));
  };


  // State for sex checkboxes
  const [sexCheckboxes, setSexCheckboxes] = useState({
    male: false,
    female: false,
  });


  // Handler function for updating the checked status of sex checkboxes
  const handleSexCheckboxChange = (sex) => {
    setSexCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [sex]: !prevCheckboxes[sex],
    }));
  };


  // State for inCITE Top 25% checkboxes
  const [inCITETop25Checkboxes, setInCITETop25Checkboxes] = useState({
    TDP43: false,
    bCatenin: false,
    NFkB: false,
  });


  // Handler function for updating the checked status of inCITE Top 25% checkboxes
  const handleInCITETop25CheckboxChange = (item) => {
    setInCITETop25Checkboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [item]: !prevCheckboxes[item],
    }));
  };


  // State for inCITE Bottom 25% checkboxes
  const [inCITEBottom25Checkboxes, setInCITEBottom25Checkboxes] = useState({
    TDP43: false,
    bCatenin: false,
    NFkB: false,
  });


  // Handler function for updating the checked status of inCITE Bottom 25% checkboxes
  const handleInCITEBottom25CheckboxChange = (item) => {
    setInCITEBottom25Checkboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [item]: !prevCheckboxes[item],
    }));
  };


  const [cellTypeCheckboxes, setCellTypeCheckboxes] = useState({
    arterialEC: false,
    veinEC: false,
    cap0EC: false,
    cap1EC: false,
    cap2EC: false,
    cap3EC: false,
    cap4EC: false,
    macro0: false,
    macro1: false,
    micro0: false,
    micro1: false,
    micro2: false,
    micro3: false,
    oligodend: false,
    opc: false,
    astrocyte: false,
    neuron: false,
    mural: false,
  });


  const handleCellTypeCheckboxChange = (cellType) => {
    setCellTypeCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [cellType]: !prevCheckboxes[cellType],
    }));
    };


  const [preperationTypeCheckboxes, setpreperationTypeCheckboxes] = useState({
    rna3: false,
    rna3inCITE: false
  });


  const handlepreperationTypeCheckboxChange = (checkbox) => {
    setpreperationTypeCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkbox]: !prevCheckboxes[checkbox],
    }));
  };


  const [filterTop25Checkboxes, setfilterTop25Checkboxes] = useState({
    tdp43: false,
    bCatenin: false,
    NFkB: false
  });


  const handlefilterTop25CheckboxChange = (checkbox) => {
    setfilterTop25Checkboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkbox]: !prevCheckboxes[checkbox],
    }));
  };


  const [filterBottom25Checkboxes, setfilterBottom25Checkboxes] = useState({
    tdp43: false,
    bCatenin: false,
    NFkB: false
  });


  const handlefilterBottom25CheckboxChange = (checkbox) => {
    setfilterBottom25Checkboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkbox]: !prevCheckboxes[checkbox],
    }));
  };


  const [filtercellTypeCheckboxes, setfiltercellTypeCheckboxes] = useState({
    arterialEC: false,
    veinEC: false,
    cap0EC: false,
    cap1EC: false,
    cap2EC: false,
    cap3EC: false,
    cap4EC: false,
    macro0: false,
    macro1: false,
    micro0: false,
    micro1: false,
    micro2: false,
    micro3: false,
    oligodend: false,
    opc: false,
    astrocyte: false,
    neuron: false,
    mural: false,
  });


  const handlefiltercellTypeCheckboxChange = (cellType) => {
    setfiltercellTypeCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [cellType]: !prevCheckboxes[cellType],
    }));
    };


    const [filterBatchCheckboxes, setfilterBatchCheckboxes] = useState({
      dec22RNA: false,
      dec2RNA: false,
      feb23RNA: false,
      feb2RNA: false,
      mar15RNA: false,
      mar16ARNA: false,
      mar16BRNA: false,
      mar17RNA: false,
      mar21RNA: false,
      mar24ARNA: false,
      mar24BRNA: false,
      mar2ARNA: false,
      mar2BRNA: false,
      mar8RNA: false,
      mar9ARNA: false,
      mar9BRNA: false,
      oct10RNA: false,
      oct19RNA: false,
      jan11RNA: false,
      jan12RNA: false,
      jan17RNA: false,
      jan18RNA: false,
      jan19ARNA: false,
      jan19BRNA: false,
      jan24ARNA: false,
      jan24BRNA: false,
      jan25RNA: false,
      jan9RNA: false
    });
 
    const handlefilterBatchCheckboxChange = (checkbox) => {
      setfilterBatchCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkbox]: !prevCheckboxes[checkbox],
      }));
    };

    const logCheckedCheckboxes = async () => {
      try {
        const checkboxData = {
          diseaseCheckboxes,
          sexCheckboxes,
          inCITETop25Checkboxes,
          inCITEBottom25Checkboxes,
          cellTypeCheckboxes,
          preperationTypeCheckboxes,
          filterTop25Checkboxes,
          filterBottom25Checkboxes,
          filtercellTypeCheckboxes,
          filterBatchCheckboxes,
        };
    
        const response = await fetch('https://i2vaeyqv5f.execute-api.us-east-1.amazonaws.com/dev/graph', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(checkboxData),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('API Response:', data); // Log response data
        setApiResponse(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error while sending checkbox data to the API:', error);
      }
    };
    
   
    useEffect(() => {
      logCheckedCheckboxes();
    }, [diseaseCheckboxes, sexCheckboxes, inCITETop25Checkboxes, inCITEBottom25Checkboxes, cellTypeCheckboxes, preperationTypeCheckboxes, filterTop25Checkboxes, filterBottom25Checkboxes, filtercellTypeCheckboxes, filterBatchCheckboxes]);


return (
<>
  <div className={styles.container}>
    <div className={styles.column}>
      <div className={styles.header}>inCITE-seq</div>
      <div className={styles.subheader}>endothelial and microglia enriched human cortex</div>
    </div>
    <div className={styles.column}>
      <img src={require("./images/UConn-logo.png")} alt="Logo" />
    </div>
  </div>




  <div>
    <img src={require("./images/Diagram.png")} alt="Diagram" />
  </div>




  <div className={styles.databrowsing}>Data Browsing</div>


  <div className={styles.datacontainer}>
    <div className={styles.data}>
      <div>Data to Plot</div>
      <div className={styles.menus}>
        <div className={styles.gene}>
          Gene
          <select
          className={styles.dropdown}
          value={geneValue}
          onChange={(e) => setGeneValue(e.target.value)}
          >
            <option value="">Select Gene</option>
            <option value="gene1">Gene 1</option>
            <option value="gene2">Gene 2</option>
          </select>
        </div>
        <div className={styles.inCITE}>
          inCITE Ab:H3
          <select
          className={styles.dropdown}
          value={inCITEValue}
          onChange={(e) => setInCITEValue(e.target.value)}
          >
            <option value="">Select inCITE</option>
            <option value="abH3_1">inCITE Ab:H3 - 1</option>
            <option value="abH3_2">inCITE Ab:H3 - 2</option>
          </select>
        </div>
      </div>
      <div className={styles.disease}>
        Disease Group
        <div className={styles.checkboxList}>
          <label>
            <input
              type="checkbox"
              checked={diseaseCheckboxes.healthyYoung}
              onChange={() => handleDiseaseCheckboxChange('healthyYoung')}
            />
            Healthy Young (Yng)
          </label>
          <label>
            <input
              type="checkbox"
              checked={diseaseCheckboxes.healthyOld}
              onChange={() => handleDiseaseCheckboxChange('healthyOld')}
            />
            Healthy Old (Old)
          </label>
          <label>
            <input
              type="checkbox"
              checked={diseaseCheckboxes.alzheimers}
              onChange={() => handleDiseaseCheckboxChange('alzheimers')}
            />
            Alzheimer's Disease (AD)
          </label>
          <label>
            <input
              type="checkbox"
              checked={diseaseCheckboxes.als}
              onChange={() => handleDiseaseCheckboxChange('als')}
            />
            Amyotrophic Lateral Sclerosis (ALS)
          </label>
          <label>
            <input
              type="checkbox"
              checked={diseaseCheckboxes.ftd}
              onChange={() => handleDiseaseCheckboxChange('ftd')}
            />
            Frontal Temporal Dmentia (FTD)
          </label>
        </div>
      </div>
      <div className={styles.sexandmorecontainer}>
        <div className={styles.sex}>
          Sex
          <div className={styles.checkboxList}>
            <label>
              <input
                type="checkbox"
                checked={sexCheckboxes.male}
                onChange={() => handleSexCheckboxChange('male')}
              />
              Male
            </label>
            <label>
              <input
                type="checkbox"
                checked={sexCheckboxes.female}
                onChange={() => handleSexCheckboxChange('female')}
              />
              Female
            </label>
          </div>
        </div>
        <div className={styles.inCITETop25}>
          inCITE Top 25%
          <div className={styles.checkboxList}>
            <label>
              <input
                type="checkbox"
                checked={inCITETop25Checkboxes.TDP43}
                onChange={() => handleInCITETop25CheckboxChange('TDP43')}
              />
              TDP-43
            </label>
            <label>
              <input
                type="checkbox"
                checked={inCITETop25Checkboxes.bCatenin}
                onChange={() => handleInCITETop25CheckboxChange('bCatenin')}
              />
              bCatenin
            </label>
            <label>
              <input
                type="checkbox"
                checked={inCITETop25Checkboxes.NFkB}
                onChange={() => handleInCITETop25CheckboxChange('NFkB')}
              />
              NFkB
            </label>
          </div>
        </div>
        <div className={styles.inCITEBottom25}>
          inCITE Bottom 25%
          <div className={styles.checkboxList}>
            <label>
              <input
                type="checkbox"
                checked={inCITEBottom25Checkboxes.TDP43}
                onChange={() => handleInCITEBottom25CheckboxChange('TDP43')}
              />
              TDP-43
            </label>
            <label>
              <input
                type="checkbox"
                checked={inCITEBottom25Checkboxes.bCatenin}
                onChange={() => handleInCITEBottom25CheckboxChange('bCatenin')}
              />
              bCatenin
            </label>
            <label>
              <input
                type="checkbox"
                checked={inCITEBottom25Checkboxes.NFkB}
                onChange={() => handleInCITEBottom25CheckboxChange('NFkB')}
              />
              NFkB
            </label>
          </div>
        </div>
      </div>
      <div className={styles.cellTypeTitle}>Cell Type</div>
      <div className={styles.cellType}>
        <div className={styles.checkboxList}>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.arterialEC}
              onChange={() => handleCellTypeCheckboxChange('arterialEC')}
            />
            Arterial EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.veinEC}
              onChange={() => handleCellTypeCheckboxChange('veinEC')}
            />
            Vein EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.cap0}
              onChange={() => handleCellTypeCheckboxChange('cap0EC')}
            />
            Capillary 0 EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.cap1}
              onChange={() => handleCellTypeCheckboxChange('cap1EC')}
            />
            Capillary 1 EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.cap2}
              onChange={() => handleCellTypeCheckboxChange('cap2EC')}
            />
            Capillary 2 EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.cap3}
              onChange={() => handleCellTypeCheckboxChange('cap3EC')}
            />
            Capillary 3 EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.cap4}
              onChange={() => handleCellTypeCheckboxChange('cap4EC')}
            />
            Capillary 4 EC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.macro0}
              onChange={() => handleCellTypeCheckboxChange('macro0')}
            />
            Macrophage 0
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.macro1}
              onChange={() => handleCellTypeCheckboxChange('macro1')}
            />
            Macrophage 1
          </label>
        </div>
        <div className={styles.checkboxList2}>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.micro0}
              onChange={() => handleCellTypeCheckboxChange('micro0')}
            />
            Microglia 0
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.micro1}
              onChange={() => handleCellTypeCheckboxChange('micro1')}
            />
            Microglia 1
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.micro2}
              onChange={() => handleCellTypeCheckboxChange('micro2')}
            />
            Microglia 2
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.micro3}
              onChange={() => handleCellTypeCheckboxChange('micro3')}
            />
            Microglia 3
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.obligodend}
              onChange={() => handleCellTypeCheckboxChange('oligodend')}
            />
            Oligodend
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.opc}
              onChange={() => handleCellTypeCheckboxChange('opc')}
            />
            OPC
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.astrocyte}
              onChange={() => handleCellTypeCheckboxChange('astrocyte')}
            />
            Astrocyte
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.neuron}
              onChange={() => handleCellTypeCheckboxChange('neuron')}
            />
            Neuron
          </label>
          <label>
            <input
              type="checkbox"
              checked={cellTypeCheckboxes.mural}
              onChange={() => handleCellTypeCheckboxChange('mural')}
            />
            Mural
          </label>
        </div>
      </div>
    </div>


    {/* FILTER STARTS HERE */}
    <div className={styles.filter}>
      <div className={styles.filtertitle}>Filter</div>
      <div className={styles.filterrow1}>
        <div className={styles.filterrow1column1}>
          <div className={styles.sectiontitle}>Preperation Type</div>
          <label>
              <input
                type="checkbox"
                checked={preperationTypeCheckboxes.rna3}
                onChange={() => handlepreperationTypeCheckboxChange('rna3')}
              />
              3'RNA
            </label>
            <label>
              <input
                type="checkbox"
                checked={preperationTypeCheckboxes.rna3inCITE}
                onChange={() => handlepreperationTypeCheckboxChange('rna3inCITE')}
              />
              3'RNA + inCITE
            </label>
        </div>
        <div className={styles.filterrow1column2}>
        <div className={styles.sectiontitle}>inCITE top 25%</div>
          <label>
              <input
                type="checkbox"
                checked={filterTop25Checkboxes.tdp43}
                onChange={() => handlefilterTop25CheckboxChange('tdp43')}
              />
              TDP-43
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterTop25Checkboxes.bCatenin}
                onChange={() => handlefilterTop25CheckboxChange('bCatenin')}
              />
              bCatenin
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterTop25Checkboxes.NFkB}
                onChange={() => handlefilterTop25CheckboxChange('NFkB')}
              />
              NFkB
            </label>
        </div>
        <div className={styles.filterrow1column3}>
          <div className={styles.sectiontitle}>inCite Bottom 25%</div>
          <label>
              <input
                type="checkbox"
                checked={filterBottom25Checkboxes.tdp43}
                onChange={() => handlefilterBottom25CheckboxChange('tdp43')}
              />
              TDP-43
            </label>
            <label>
              <input
                type="checkbox"
                checked={filterBottom25Checkboxes.bCatenin}
                onChange={() => handlefilterBottom25CheckboxChange('bCatenin')}
              />
              bCatenin
            </label>
          <label>
              <input
                type="checkbox"
                checked={filterBottom25Checkboxes.NFkB}
                onChange={() => handlefilterBottom25CheckboxChange('NFkB')}
              />
              NFkB
            </label>
        </div>
      </div>
      <div className={styles.sectiontitle}>Cell Type</div>
      <div className={styles.filterrow2}>
        <div className={styles.filterrow2column1}>
        <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.arterialEC}
                onChange={() => handlefiltercellTypeCheckboxChange('arterialEC')}
              />
              Arterial EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.veinEC}
                onChange={() => handlefiltercellTypeCheckboxChange('veinEC')}
              />
              Vein EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.cap0EC}
                onChange={() => handlefiltercellTypeCheckboxChange('cap0EC')}
              />
              Capillary 0 EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.cap1EC}
                onChange={() => handlefiltercellTypeCheckboxChange('cap1EC')}
              />
              Capillary 1 EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.cap2EC}
                onChange={() => handlefiltercellTypeCheckboxChange('cap2EC')}
              />
              Capillary 2 EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.cap3EC}
                onChange={() => handlefiltercellTypeCheckboxChange('cap3EC')}
              />
              Capillary 3 EC
            </label>
            <label>
              <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.cap4EC}
                onChange={() => handlefiltercellTypeCheckboxChange('cap4EC')}
              />
              Capillary 4 EC
            </label>
        </div>
        <div className={styles.filterrow2column2}>
          <label>
            <input
                type="checkbox"
                checked={filtercellTypeCheckboxes.micro0}
                onChange={() => handlefiltercellTypeCheckboxChange('micro0')}
              />
              Microglia 0
            </label>
            <label>
              <input
                  type="checkbox"
                  checked={filtercellTypeCheckboxes.micro1}
                  onChange={() => handlefiltercellTypeCheckboxChange('micro1')}
                />
                Microglia 1
              </label>
              <label>
              <input
                  type="checkbox"
                  checked={filtercellTypeCheckboxes.micro2}
                  onChange={() => handlefiltercellTypeCheckboxChange('micro2')}
                />
                Microglia 2
              </label>
              <label>
              <input
                  type="checkbox"
                  checked={filtercellTypeCheckboxes.micro3}
                  onChange={() => handlefiltercellTypeCheckboxChange('micro3')}
                />
                Microglia 3
              </label>
              <label>
              <input
                  type="checkbox"
                  checked={filtercellTypeCheckboxes.macro0}
                  onChange={() => handlefiltercellTypeCheckboxChange('macro0')}
                />
                Macrophage 0
              </label>
              <label>
              <input
                  type="checkbox"
                  checked={filtercellTypeCheckboxes.macro1}
                  onChange={() => handlefiltercellTypeCheckboxChange('macro1')}
                />
                Macrophage 1
              </label>
        </div>
        <div className={styles.filterrow2column3}>
          <label>
            <input
              type="checkbox"
              checked={filtercellTypeCheckboxes.oligodend}
              onChange={() => handlefiltercellTypeCheckboxChange('oligodend')}
            />
            Oligodend
          </label>
          <label>
            <input
              type="checkbox"
              checked={filtercellTypeCheckboxes.opc}
              onChange={() => handlefiltercellTypeCheckboxChange('opc')}
              />
            OPC
          </label>
          <label>
            <input
              type="checkbox"
              checked={filtercellTypeCheckboxes.astrocyte}
              onChange={() => handlefiltercellTypeCheckboxChange('astrocyte')}
              />
            Astrocyte
          </label>
          <label>
            <input
              type="checkbox"
              checked={filtercellTypeCheckboxes.neuron}
              onChange={() => handlefiltercellTypeCheckboxChange('neuron')}
              />
            Neuron
          </label>
          <label>
            <input
              type="checkbox"
              checked={filtercellTypeCheckboxes.mural}
              onChange={() => handlefiltercellTypeCheckboxChange('mural')}
              />
            Mural
          </label>
        </div>
      </div>
      <div className={styles.sectiontitle}>Batch</div>
      <div className={styles.filterrow3}>
        <div className={styles.filterrow3column1}>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.dec22RNA}
            onChange={() => handlefilterBatchCheckboxChange('dec22RNA')}
            />
          2022Dec22RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.dec2RNA}
            onChange={() => handlefilterBatchCheckboxChange('dec2RNA')}
            />
          2022Dec2RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.feb23RNA}
            onChange={() => handlefilterBatchCheckboxChange('feb23RNA')}
            />
          2022Feb23RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.feb2RNA}
            onChange={() => handlefilterBatchCheckboxChange('feb2RNA')}
            />
          2022Feb2RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar15RNA}
            onChange={() => handlefilterBatchCheckboxChange('mar15RNA')}
            />
          2022Mar15RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar16ARNA}
            onChange={() => handlefilterBatchCheckboxChange('mar16ARNA')}
            />
          2022Mar16ARNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar16BRNA}
            onChange={() => handlefilterBatchCheckboxChange('mar16BRNA')}
            />
          2022Mar16BRNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar17RNA}
            onChange={() => handlefilterBatchCheckboxChange('mar17RNA')}
            />
          2022Mar17RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar21RNA}
            onChange={() => handlefilterBatchCheckboxChange('mar21RNA')}
            />
          2022Mar21RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar24ARNA}
            onChange={() => handlefilterBatchCheckboxChange('mar24ARNA')}
            />
          2022Mar24ARNA
        </label>
        </div>
        <div className={styles.filterrow3column2}>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.mar24BRNA}
              onChange={() => handlefilterBatchCheckboxChange('mar24BRNA')}
              />
            2022Mar24BRNA
          </label>
          <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar2ARNA}
            onChange={() => handlefilterBatchCheckboxChange('mar2ARNA')}
            />
          2022Mar2ARNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar2BRNA}
            onChange={() => handlefilterBatchCheckboxChange('mar2BRNA')}
            />
          2022Mar2BRNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar8RNA}
            onChange={() => handlefilterBatchCheckboxChange('mar8RNA')}
            />
          2022Mar8RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar9ARNA}
            onChange={() => handlefilterBatchCheckboxChange('mar9ARNA')}
            />
          2022Mar9ARNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.mar9BRNA}
            onChange={() => handlefilterBatchCheckboxChange('mar9BRNA')}
            />
          2022Mar9BRNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.oct10RNA}
            onChange={() => handlefilterBatchCheckboxChange('oct10RNA')}
            />
          2022Oct10RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.oct19RNA}
            onChange={() => handlefilterBatchCheckboxChange('oct19RNA')}
            />
          2022Oct19RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.jan11RNA}
            onChange={() => handlefilterBatchCheckboxChange('jan11RNA')}
            />
          2022Jan11RNA
        </label>
        <label>
          <input
            type="checkbox"
            checked={filterBatchCheckboxes.jan12RNA}
            onChange={() => handlefilterBatchCheckboxChange('jan12RNA')}
            />
          2022Jan12RNA
        </label>
        </div>
        <div className={styles.filterrow3column3}>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan17RNA}
              onChange={() => handlefilterBatchCheckboxChange('jan17RNA')}
              />
            2022Jan17RNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan18RNA}
              onChange={() => handlefilterBatchCheckboxChange('jan18RNA')}
              />
            2022Jan18RNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan19ARNA}
              onChange={() => handlefilterBatchCheckboxChange('jan19ARNA')}
              />
            2022Jan19ARNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan19BRNA}
              onChange={() => handlefilterBatchCheckboxChange('jan19BRNA')}
              />
            2022Jan19BRNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan24ARNA}
              onChange={() => handlefilterBatchCheckboxChange('jan24ARNA')}
              />
            2022Jan24ARNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan24BRNA}
              onChange={() => handlefilterBatchCheckboxChange('jan24BRNA')}
              />
            2022Jan24BRNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan25RNA}
              onChange={() => handlefilterBatchCheckboxChange('jan25RNA')}
              />
            2022Jan25RNA
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterBatchCheckboxes.jan9RNA}
              onChange={() => handlefilterBatchCheckboxChange('jan9RNA')}
              />
            2022Jan19RNA
          </label>
        </div>
      </div>
    </div>
  </div>
  <div className={styles.apiResponseContainer}>
    <div className={styles.apiResponseTitle}>API Response</div>
    <pre className={styles.apiResponse}>{apiResponse}</pre>
  </div>
</>
);
}


export default Testing;