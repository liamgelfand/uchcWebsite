import React, { useState, useEffect } from 'react';
import styles from './styles/Testing.module.css';
import GroupedByAutocomplete from './group';
import GeneAutocomplete from './gene';

function Testing() {

  const [apiResponse, setApiResponse] = useState(''); 
   
    // useEffect(() => {
    //   logCheckedCheckboxes();
    // }, [diseaseCheckboxes, sexCheckboxes, cellTypeCheckboxes, preperationTypeCheckboxes]);


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


  const logCheckedCheckboxes = async () => {
    try {
      const checkboxData = {
        diseaseCheckboxes,
        sexCheckboxes,
        cellTypeCheckboxes,
        preperationTypeCheckboxes,
      };

      // DEV API ENDPOINT: https://i2vaeyqv5f.execute-api.us-east-1.amazonaws.com/dev/graph 


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
        console.log(apiResponse)
      } catch (error) {
        console.error('Error while sending checkbox data to the API:', error);
      }
    };

    useEffect(() => {
      logCheckedCheckboxes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diseaseCheckboxes, sexCheckboxes, cellTypeCheckboxes, preperationTypeCheckboxes]);


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

      <div className={styles.databrowsing}>
        Data Browsing
      </div>
      <div className={styles.checkboxcontainer}>
        <div className={styles.row1}>
          <div className={styles.preptypecontainer}>
              <div className={styles.preptype}>
                Preperation Type
                <div className={styles.checkboxList}>
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
              </div>
            </div>
            <div className={styles.sexcontainer}>
              <div className={styles.sex}>
              Sex
              <div className={styles.checkboxList}>
                <label>
                  <input 
                    type="checkbox" 
                    checked={preperationTypeCheckboxes.male}
                    onChange={() => handleSexCheckboxChange('male')}
                  />
                  Male
                </label>
                <label>
                  <input 
                  type="checkbox" 
                  checked={preperationTypeCheckboxes.female}
                  onChange={() => handleSexCheckboxChange('female')}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className={styles.diseasegroupcontainer}>
            <div className={styles.diseasegroup}>
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
                  Frontal Temporalobar Dementia (FTD)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.celltypecontainer}>
            <div className={styles.celltypecontainer2}>
              <div className={styles.sex}>
                Cell Type
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
                      checked={cellTypeCheckboxes.cap0EC}
                      onChange={() => handleCellTypeCheckboxChange('cap0EC')}
                    />
                    Capillary 0 EC
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={cellTypeCheckboxes.cap1EC}
                      onChange={() => handleCellTypeCheckboxChange('cap1EC')}
                    />
                    Capillary 1 EC
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={cellTypeCheckboxes.cap2EC}
                      onChange={() => handleCellTypeCheckboxChange('cap2EC')}
                    />
                    Capillary 2 EC
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={cellTypeCheckboxes.cap3EC}
                      onChange={() => handleCellTypeCheckboxChange('cap3EC')}
                    />
                    Capillary 3 EC
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={cellTypeCheckboxes.cap4EC}
                      onChange={() => handleCellTypeCheckboxChange('cap4EC')}
                    />
                    Capillary 4 EC
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={cellTypeCheckboxes.oligodend}
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
                </div>
              </div>
            </div>
            <div className={styles.celltypecontainer2}>
              <div className={styles.celltypeinvisible}>
                Cell Type
                <div className={styles.checkboxList}>
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
                    Nueron
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
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.column1}>
            <div className={styles.plot}>
              Plot
            </div>
            <GeneAutocomplete></GeneAutocomplete>
          </div>
          <div className={styles.column1}>
            <div className={styles.groupedby}>
              Grouped by
            </div>
            <GroupedByAutocomplete></GroupedByAutocomplete>
          </div>
          <div>Graph</div>
        </div>
      </div>
    </>
  );
}

export default Testing;
