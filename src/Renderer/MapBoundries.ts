const overWriteMapBoundaries = {
    'pl_badwater_pro_v9': {
        "boundaryMin": {
            "x": -2427,
            "y": -3340
        },
        "boundaryMax": {
            "x": 3785,
            "y": 2922
        }
    },
    'cp_gullywash_final1': {
        "boundaryMin": {
            "x": -4050,
            "y": -2950
        },
        "boundaryMax": {
            "x": 5432,
            "y": 2260
        }
    },
    'cp_process_final': {
        "boundaryMin": {
            "x": -5222,
            "y": -3146
        },
        "boundaryMax": {
            "x": 5216,
            "y": 3128
        }
    },
    'cp_badlands': {
        "boundaryMin": {
            "x": -4285,
            "y": -4898
        },
        "boundaryMax": {
            "x": 2577,
            "y": 4858
        }
    },
    'pl_upward': {
        "boundaryMin": {
            "x": -2653,
            "y": -4344
        },
        "boundaryMax": {
            "x": 3097,
            "y": 2180
        }
    },
    'koth_product_rc8': {
        "boundaryMin": {
            "x": -2859,
            "y": -3668
        },
        "boundaryMax": {
            "x": -171,
            "y": 3776
        }
    },
    'cp_snakewater_final1': {
        "boundaryMin": {
            "x": -5671,
            "y": -2649
        },
        "boundaryMax": {
            "x": 6687,
            "y": 2961
        }
    },
    'ultiduo_baloo_v2': {
        "boundaryMin": {
            "x": -1678,
            "y": -1964
        },
        "boundaryMax": {
            "x": 1678,
            "y": 1964
        }
    },
    'cp_sunshine': {
        "boundaryMin": {
            "x": -8798,
            "y": 173
        },
        "boundaryMax": {
            "x": -2502,
            "y": 10279
        }
    },
    'cp_metalworks_rc7': {
        "boundaryMin": {
            "x": -3034,
            "y": -6699
        },
        "boundaryMax": {
            "x": 3374,
            "y": 4939
        }
    },
    'cp_steel': {
        "boundaryMin": {
            "x": -2406,
            "y": -3422
        },
        "boundaryMax": {
            "x": 2924,
            "y": 2684
        }
    },
    'koth_lakeside_final': {
        "boundaryMin": {
            "x": -4617,
            "y": -2160
        },
        "boundaryMax": {
            "x": 4491,
            "y": 1114
        }
    },
    'cp_granary_pro_b10': {
        "boundaryMin": {
            "x": -3069,
            "y": -6539
        },
        "boundaryMax": {
            "x": 7,
            "y": 6263
        }
    },
    'koth_ashville_rc1': {
        "boundaryMin": {
            "x": -1423,
            "y": -3920
        },
        "boundaryMax": {
            "x": 1501,
            "y": 3890
        }
    },
    'cp_reckoner_b3a': {
        "boundaryMin": {
            "x": -3800,
            "y": -4921
        },
        "boundaryMax": {
            "x": 3794,
            "y": 4879
        }
    },
    'pl_borneo': {
        "boundaryMin": {
            "x": -3470,
            "y": -8160
        },
        "boundaryMax": {
            "x": 3168,
            "y": 3786
        }
    },
    'pl_swiftwater_final1': {
        "boundaryMin": {
            "x": 408,
            "y": -6128
        },
        "boundaryMax": {
            "x": 6296,
            "y": 2624
        }
    },
    'ultiduo_grove_b2': {
        "boundaryMin": {
            "x": -2099,
            "y": -1793
        },
        "boundaryMax": {
            "x": 2099,
            "y": 1793
        }
    },
    'pl_vigil_b2': {
        "boundaryMin": {
            "x": -1019,
            "y": -2070
        },
        "boundaryMax": {
            "x": 4875,
            "y": 4784
        }
    },
    'koth_bagel_rc4': {
        "boundaryMin": {
            "x": -4286,
            "y": -1234
        },
        "boundaryMax": {
            "x": 4196,
            "y": 1150
        }
    },
    'ctf_ballin_sky': {
        "boundaryMin": {
            "x": -1024,
            "y": -1504
        },
        "boundaryMax": {
            "x": 1024,
            "y": 1504
        }
    },
    'koth_ultiduo_r_b7': {
        "boundaryMin": {
            "x": -1337,
            "y": -1313
        },
        "boundaryMax": {
            "x": 1337,
            "y": 1313
        }
    },
    'koth_warmtic_rc4': {
        "boundaryMin": {
            "x": -1337,
            "y": -4437
        },
        "boundaryMax": {
            "x": 2099,
            "y": 4547
        }
    },
    'cp_alloy_rc2a': {
        "boundaryMin": {
            "x": -4271,
            "y": -3262
        },
        "boundaryMax": {
            "x": 1801,
            "y": 5492
        }
    },
    'pl_millstone_ugc_7': {
        "boundaryMin": {
            "x": -3349,
            "y": -1776
        },
        "boundaryMax": {
            "x": 2709,
            "y": 4840
        }
    },
    'cp_vanguard': {
        "boundaryMin": {
            "x": -5585,
            "y": -1896
        },
        "boundaryMax": {
            "x": 5585,
            "y": 1896
        }
    },
	'koth_cascade_b6': {
		"boundaryMin": {
			"x": -1682,
			"y": -3807
		},
		"boundaryMax": {
			"x": 1714,
			"y": 3735
		}
	}
};

overWriteMapBoundaries['koth_viaduct'] = overWriteMapBoundaries['koth_product_rc8'];

export function findMapAlias(map) {
    if (overWriteMapBoundaries[map]) {
        return map;
    }
    const trimMapName = (map) => {
        while (map.lastIndexOf('_') > map.indexOf('_')) {
            map = map.substr(0, map.lastIndexOf('_'));
        }
        return map;
    };
    const trimmed = trimMapName(map);
    if (overWriteMapBoundaries[trimmed]) {
        return trimmed;
    }
    for (const existingMap of Object.keys(overWriteMapBoundaries)) {
        if (trimMapName(existingMap) === map) {
            return existingMap;
        }
    }
    for (const existingMap of Object.keys(overWriteMapBoundaries)) {
        if (trimMapName(existingMap) === trimmed) {
            return existingMap;
        }
    }
    return map;
}

export interface MapBoundries {
    boundaryMin: {
        x: number;
        y: number;
    };
    boundaryMax: {
        x: number;
        y: number;
    }
}

export function getMapBoundaries(map: string): MapBoundries | null {
    const mapAlias = findMapAlias(map);
    return overWriteMapBoundaries[mapAlias];
}
