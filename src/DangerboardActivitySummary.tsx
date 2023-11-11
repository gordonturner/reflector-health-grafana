import React, { useEffect } from 'react';
import { PanelProps } from '@grafana/data';
import { DEFAULT_API_URL, DEFAULT_API_URL_SUFFIX, DEFAULT_INSTALL_ID, DEFAULT_REFRESH_IN_MS } from './constants';
import { ReactDashboardData, ReactDashboardOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import axios, { AxiosRequestConfig } from 'axios';

interface Props extends PanelProps<ReactDashboardOptions> {}

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Roboto, Helvetica, Arial, sans-serif;
      position: relative;
      padding-top: 25px;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
    fitnessBlock: css`
    `,
    fitnessBlockElement: css`
      float: left;
      padding-left: 42px;
  `,
    fitnessTitle: css`
      font-size: 23px;
      font-weight: 500;
      text-align: left;
      color: #fffff;
    `,
    fitnessValues: css`
      font-size: 45px;
      font-weight: 500;
      text-align: center;
    `,
    fitnessUnits: css`
      font-size: 35px;
      font-weight: 500;
    `,
    fitnessMove: css`
      color: #fc1d20;
    `,
    fitnessExercise: css`
      color: #9cfc33;
    `,
    fitnessStand: css`
      color: #32cbd4;
    `,
    
  };
};

export const DangerBoardActivityPanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme2();
  const styles = useStyles2(getStyles);
  // const styles = getStyles();

  const [reactDashboardData, updateReactDashboardData] = React.useState<ReactDashboardData>();
  const timerRefresh = options.refreshInMs ? options.refreshInMs : DEFAULT_REFRESH_IN_MS;
  const apiUrl = DEFAULT_API_URL;
  const apiUrlSuffix = DEFAULT_API_URL_SUFFIX;
  const installId = options.installId ? options.installId : DEFAULT_INSTALL_ID;
  const combinedUrl = apiUrl + installId + apiUrlSuffix;

  /**
   * On page render, make an initial request for the data from the API and then set a timer to refresh it.
   */
  useEffect(() => {
    /**
     * This function manages the async call to the API.
     */
    const requestData = async () => {
      // Setup the authentication header
      const requestOptions: AxiosRequestConfig = {
        method: 'GET',
        headers: {},
      };

      //const response = axios.get(options.apiUrl ? options.apiUrl : DEFAULT_API_URL, requestOptions);
      const response = axios.get(combinedUrl, requestOptions);
      let data = (await response).data;

      console.log('Data updated:');
      console.log(data);

      // Show a 'No data' message
      if (data === undefined || data.length === 0) {
        const reactDashboardData: ReactDashboardData = {

          activeEnergyBurned: 0,
          activeEnergyBurnedGoal: 0,
          activityMoveMode: 0,
          appleExerciseTime: 0,
          appleExerciseTimeGoal: 0,
          appleMoveTime: 0,
          appleMoveTimeGoal: 0,
          appleStandHours: 0,
          appleStandHoursGoal: 0,
          dateOfActivity: '',
          userId: '',
          actualMove: 0,
          actualMoveGoal: 0,
          actualMoveUnit: ''
        };
        data = [reactDashboardData];
      }

      console.log('data.activityMoveMode:');
      console.log(data.activityMoveMode);

      // activityMoveMode, either calories burned or time moving flag
      // 0 = appleMoveTime
      // 1 = activeEnergyBurned
      if ( data.activityMoveMode === 0 ){
        console.log( 'Setting fitnessMove to appleMoveTime/appleMoveTimeGoal' );
        data.actualMove = data.appleMoveTime;
        data.actualMoveGoal = data.appleMoveTimeGoal;
        data.actualMoveUnit = 'MIN';
      } else {
        console.log( 'Setting fitnessMove to activeEnergyBurned/activeEnergyBurnedGoal' );
        data.actualMove = data.activeEnergyBurned;
        data.actualMoveGoal = data.activeEnergyBurnedGoal;
        data.actualMoveUnit = 'CAL';
      }

      updateReactDashboardData(data);
    };

    const requestDataAsync = async () => {
      await requestData();
    };
    requestDataAsync();
    setInterval(() => requestDataAsync(), timerRefresh);
  }, [timerRefresh, combinedUrl]);

  /**
   * Render the panel.
   */
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
    <div className={styles.fitnessBlock}>
    <div className={styles.fitnessBlockElement}>
      <div className={styles.fitnessTitle}>Move</div>
      <div>
        <span className={styles.fitnessValues + ' ' + styles.fitnessMove}>{reactDashboardData?.actualMove}/{reactDashboardData?.actualMoveGoal}
        </span>
        <span className={styles.fitnessUnits + ' ' + styles.fitnessMove}>{reactDashboardData?.actualMoveUnit}</span>
      </div>
    </div>
    <div className={styles.fitnessBlockElement}>
      <div className={styles.fitnessTitle}>Exercise</div>
      <div>
        <span className={styles.fitnessValues + ' ' + styles.fitnessExercise}>{reactDashboardData?.appleExerciseTime}/{reactDashboardData?.appleExerciseTimeGoal}</span>
        <span className={styles.fitnessUnits + ' ' + styles.fitnessExercise}>MIN</span>
      </div>
    </div>
    <div className={styles.fitnessBlockElement}>
      <div className={styles.fitnessTitle}>Stand</div>
      <div>
        <span className={styles.fitnessValues + ' ' + styles.fitnessStand}>{reactDashboardData?.appleStandHours}/{reactDashboardData?.appleStandHoursGoal}</span>
        <span className={styles.fitnessUnits + ' ' + styles.fitnessStand}>HRS</span>
      </div>
    </div>
    </div>

  </div>
  );
};

