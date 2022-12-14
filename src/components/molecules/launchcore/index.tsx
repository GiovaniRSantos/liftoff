import React from 'react';

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';

import * as Atoms from '@components/atoms';
import type { Core } from '@types';

type LandingTypeProps = {
  [key: string]: string;
};

const getLandingType: LandingTypeProps = {
  ASDS: 'Drone Ship',
  RTLS: 'Landing Pad',
};
function LaunchCore({ launchCore }: { launchCore: Core }) {
  const { core, landing_success, landing_type, landpad } = launchCore;

  if (!core) {
    return null;
  }

  return (
    <Atoms.Pressable
      onPress={async () => {
        if (landpad?.wikipedia) {
          await WebBrowser.openBrowserAsync(landpad.wikipedia);
        }
      }}
    >
      <Atoms.Card>
        <Atoms.Row
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Atoms.Box>
            <Atoms.Row sx={{ alignItems: 'center' }}>
              <Atoms.Text
                variant="text-xs"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Core
              </Atoms.Text>

              <Atoms.Text
                variant="text-xs"
                sx={{
                  color: 'primary',
                  fontSize: 10,
                  ml: '4px',
                }}
              >
                Block {core?.block}
                {core?.serial ?? ` - ${core?.serial}`}
              </Atoms.Text>
            </Atoms.Row>

            <Atoms.Row sx={{ mt: '15px', alignItems: 'center' }}>
              {landing_type && (
                <Atoms.Badge>
                  <Atoms.Row sx={{ alignItems: 'center' }}>
                    <Ionicons name="caret-down" color="white" size={10} />

                    <Atoms.Text
                      variant="text-xs"
                      sx={{
                        color: 'white',
                        fontSize: 9,
                        fontWeight: 500,
                        ml: '4px',
                      }}
                    >
                      {getLandingType[landing_type] ?? 'Unknown'}
                    </Atoms.Text>
                  </Atoms.Row>
                </Atoms.Badge>
              )}

              {landpad?.name && (
                <Atoms.Badge sx={{ ml: '4px' }}>
                  <Atoms.Text
                    variant="text-xs"
                    sx={{
                      color: 'white',
                      fontSize: 9,
                      fontWeight: 500,
                    }}
                  >
                    {landpad.name}
                  </Atoms.Text>
                </Atoms.Badge>
              )}

              {core?.reuse_count !== null && (
                <Atoms.Badge sx={{ ml: '4px' }}>
                  <Atoms.Row sx={{ alignItems: 'center' }}>
                    <Ionicons name="sync" color="white" size={10} />

                    <Atoms.Text
                      variant="text-xs"
                      sx={{
                        color: 'white',
                        fontSize: 9,
                        fontWeight: 500,
                        ml: '4px',
                      }}
                    >
                      {core?.reuse_count}
                    </Atoms.Text>
                  </Atoms.Row>
                </Atoms.Badge>
              )}

              {landing_success !== null && (
                <Atoms.Badge
                  sx={{
                    ml: '4px',
                  }}
                >
                  {landing_success ? (
                    <Ionicons name="checkmark-sharp" color="green" size={8} />
                  ) : (
                    <Ionicons name="close-sharp" color="red" size={8} />
                  )}
                </Atoms.Badge>
              )}
            </Atoms.Row>
          </Atoms.Box>

          <Ionicons name="chevron-forward" color="white" size={18} />
        </Atoms.Row>
      </Atoms.Card>
    </Atoms.Pressable>
  );
}

export { LaunchCore };
