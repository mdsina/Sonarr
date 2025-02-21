import AppSectionState, { Error } from 'App/State/AppSectionState';
import Series, { SeriesMonitor, SeriesType } from 'Series/Series';

export interface AddSeries extends Series {
  folder: string;
}

interface AddSeriesAppState extends AppSectionState<AddSeries> {
  isAdding: boolean;
  isAdded: boolean;
  addError: Error | undefined;

  defaults: {
    rootFolderPath: string;
    monitor: SeriesMonitor;
    qualityProfileId: number;
    seriesType: SeriesType;
    seasonFolder: boolean;
    tags: number[];
    searchForMissingEpisodes: boolean;
    searchForCutoffUnmetEpisodes: boolean;
  };
}

export default AddSeriesAppState;
