import { gql } from "graphql-request";
import { QueryClient } from "@/clients/QueryClient";

const GET_MAIN_DATA_QUERY = gql`
  query GET_MAIN_DATA {
    allSettings {
      generalSettingsLanguage
      generalSettingsTitle
      generalSettingsUrl
    }
    generalSettings {
      description
    }
  }
`;

type GET_MAIN_DATA_REQUEST = {
  data: {
    allSettings: {
      generalSettingsLanguage: string;
      generalSettingsTitle: string;
      generalSettingsUrl: string;
    };
    generalSettings: {
      description: string;
    };
  };
};

type GET_MAIN_DATA_RESPONSE = {
  language: string;
  title: string;
  description: string;
  settingsUrl: string;
};

export default async function GET_MAIN_DATA() {
  try {
    const request: GET_MAIN_DATA_REQUEST = await QueryClient.request(
      GET_MAIN_DATA_QUERY
    );

    const response: GET_MAIN_DATA_RESPONSE = {
      description: request.data.generalSettings.description,
      language: request.data.allSettings.generalSettingsLanguage,
      settingsUrl: request.data.allSettings.generalSettingsUrl,
      title: request.data.allSettings.generalSettingsTitle,
    };

    return response;
  } catch (error) {
    console.log(`❌ Error fetch post: ${error}`);
    throw error;
  }
}
