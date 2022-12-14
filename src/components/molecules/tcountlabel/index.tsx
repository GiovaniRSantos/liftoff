import React from 'react';

import * as Atoms from '@components/atoms';
import DeviceUtils from '@utils/DeviceUtils';
import type { LaunchStageType } from '@utils/helpers';

const getLaunchColor = {
  'T-Minus': 'accent',
  Liftoff: '#df7341',
  'T-Plus': 'green',
};

function TCountLabel({ stage }: { stage: LaunchStageType }) {
  return (
    <Atoms.Box
      sx={{
        alignSelf: 'flex-start',
        borderBottomColor: getLaunchColor[stage],
        borderBottomWidth: 2,
      }}
    >
      <Atoms.Text
        variant="text-xs"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          lineHeight: 22,
          fontSize: DeviceUtils.isTinyPhone ? 9 : 12,
        }}
      >
        {stage}
      </Atoms.Text>
    </Atoms.Box>
  );
}

export { TCountLabel };
