import { LeapFrog } from '@uiball/loaders'

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LeapFrog
                size={50}
                speed={2.5}
                color="white"
            />
        </div>
    )
}

export default Loading