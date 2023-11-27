import './App.css';
import { 
  // TournamentBracket, 
  // AddNewParticipantToFirstStage, 
  // CreateSingleEliminationTournament, 
  // CreateParticipantForm, 
  TournamentRankTable 
} from '@playoxygen/react-bravatars-web'

function App() {
  return (
    <div className="App">
        {/* <div style={{ padding: '100px', display: 'flex' }}>
            <TournamentBracket apiUrl='https://klic-brkt-staging.fly.dev/api/' />
        </div>
        <CreateParticipantForm apiUrl='https://klic-brkt-staging.fly.dev/api/' />
        <CreateSingleEliminationTournament
          apiUrl="https://klic-brkt-staging.fly.dev/api/"
          onSuccess={(tournament) => {
            // Your callback logic here
            console.log("Tournament created:", tournament);
            console.log("Tournament created:", tournament.id);
            // You can use this data as needed
          }}
        />
        <AddNewParticipantToFirstStage apiUrl='https://klic-brkt-staging.fly.dev/api/' /> */}
        <TournamentRankTable apiUrl='https://klic-brkt-staging.fly.dev/api/' />
    </div>
  );
}

export default App;
