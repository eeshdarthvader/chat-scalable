import axios from "axios";
import "./styles.css";

axios.defaults.withCredentials = true;
axios.defaults.proxy = {
  host: "https://aj71l.la3-c2-fra.salesforceliveagent.com",
  port: 80,
  auth: {
    username: "",
    password: ""
  }
};

export const Chat = () => {
  const startChat = () => {
    // First GET request to get the key
    axios
      .get(
        "https://aj71l.la3-c2-fra.salesforceliveagent.com/chat/rest/System/SessionId?SessionId.ClientType=snapins",
        {
          headers: {
            "Access-Control-Allow-Origin": "https://33rhw6.csb.app",
            "X-LIVEAGENT-AFFINITY": null,
            "X-LIVEAGENT-API-VERSION": 56,
            Cookie:
              "X-Salesforce-CHAT=!WKDOF4H1egj9vrpD0x8YJcdCFBNqacUnNaTxYALSX3B/ZP4xu+FcZ8cHxzZ33KMpXkHtiUU7eY5XkwE=",
            Accept: "*/*",
            "Sec-Fetch-Mode": "cors"
          }
        }
      )
      .then((response) => {
        const key = response.data.key;
        // POST request using the key as a Header parameter
        axios
          .post(
            "https://aj71l.la3-c2-fra.salesforceliveagent.com/chat/rest/Chasitor/ChasitorInit",
            {
              organizationId: "00D0Y0000033WUz",
              deploymentId: "5720Y000000LI1Y",
              buttonId: "5731n000000LG4T",
              sessionId: null,
              trackingId: "",
              userAgent:
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.102 Safari/537.36",
              language: "en-GB",
              screenResolution: "1728x1117",
              visitorName: "Eesh",
              prechatDetails: [
                {
                  label: "Vorname",
                  value: "Eesh",
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: true,
                  doKnowledgeSearch: false
                },
                {
                  label: "Nachname",
                  value: "Tyagi",
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: true,
                  doknowledgeSearch: false
                },
                {
                  label: "E-Mail",
                  value: "eesh.tyagi@gmail.com",
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: true,
                  doknowledgeSearch: false
                },
                {
                  label: "Thema",
                  value:
                    "Chrome 104.0.5112.102 Web Chat for User 9SrCXJxFxmcF7rp1qJ1BeU",
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: true,
                  doknowledgeSearch: false
                },
                {
                  label: "eswLiveAgentDevName",
                  value:
                    "EmbeddedServiceLiveAgent_Parent04I1n000000TNOYEA4_1661703937c",
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: false,
                  doknowledgeSearch: false
                },
                {
                  label: "hasOnlyExtraPrechatInfo",
                  value: false,
                  entityMaps: [],
                  transcriptFields: [],
                  displayToAgent: false,
                  doknowledgeSearch: false
                }
              ],
              buttonOverrides: [],
              receiveQueueUpdates: true
            },
            {
              headers: {
                "X-LIVEAGENT-SESSION-KEY": key
              },
              withCredentials: true
            }
          )
          .then((response) => {
            // Handle response
            console.log("response", response);
          })
          .catch((error) => {
            // Handle error
          });
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div className="Chat">
      <button onClick={startChat}>Start Chat</button>
    </div>
  );
};
