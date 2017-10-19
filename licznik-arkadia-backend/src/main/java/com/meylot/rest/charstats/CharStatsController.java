package com.meylot.rest.charstats;

import javax.validation.Valid;

import com.meylot.domain.stats.CharStats;
import com.meylot.domain.stats.CharStatsResult;

import org.apache.log4j.Logger;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/char-stats")
public class CharStatsController {

    private Logger logger = Logger.getLogger("test");

    @PostMapping(produces = "application/json")
    public ResponseEntity<CharStatsResult> calculate(@RequestBody @Valid CharStatsResource stats) {
        logger.info("Calculate");

        CharStats charStats = CharStats.newBuilder()
                .withStrength(stats.getStrength())
                .withStrengthLack(stats.getStrengthLack())
                .withDexterity(stats.getDexterity())
                .withDexterityLack(stats.getDexterityLack())
                .withStamina(stats.getStamina())
                .withStaminaLack(stats.getStaminaLack())
                .withIntellect(stats.getIntellect())
                .withIntellectLack(stats.getIntellectLack())
                .withCourage(stats.getCourage())
                .withCourageLack(stats.getCourageLack())
                .build();

        CharStatsResult result = charStats.calculateCharStats();

        return new ResponseEntity<>(result, new HttpHeaders(), HttpStatus.CREATED);
    }
}
