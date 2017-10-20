package com.meylot.rest.charstats;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.meylot.domain.stats.types.Courage;
import com.meylot.domain.stats.types.Dexterity;
import com.meylot.domain.stats.types.Intellect;
import com.meylot.domain.stats.types.Lack;
import com.meylot.domain.stats.types.Stamina;
import com.meylot.domain.stats.types.Strength;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

@RunWith(SpringJUnit4ClassRunner.class)
// @ContextConfiguration(classes = { TestContext.class, WebAppContext.class })
@WebMvcTest(CharStatsController.class)
public class CharStatsControllerTest {

    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void emptyRequestBodyGivesError() throws Exception {
        String json = "{}";
        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/char-stats")
                                                              .contentType(MediaType.APPLICATION_JSON_UTF8)
                                                              .content(json);
        // when
        mockMvc.perform(requestBuilder).andExpect(status().is4xxClientError());
    }

    @Test
    public void simpleComputation() throws Exception {
        CharStatsResource stats = new CharStatsResource();
        stats.setStrength(Strength.WATLY);
        stats.setStrengthLack(Lack.TROCHE);
        stats.setDexterity(Dexterity.SPRAWNY);
        stats.setDexterityLack(Lack.TROCHE);
        stats.setStamina(Stamina.TWARDY);
        stats.setStaminaLack(Lack.TROCHE);
        stats.setIntellect(Intellect.INTELIGENTNY);
        stats.setIntellectLack(Lack.TROCHE);
        stats.setCourage(Courage.NIEPEWNY);
        stats.setCourageLack(Lack.TROCHE);

        String json = objectMapper.writeValueAsString(stats);

        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/api/char-stats")
                                                              .contentType(MediaType.APPLICATION_JSON_UTF8)
                                                              .content(json);
        // when
        mockMvc.perform(requestBuilder)
               .andExpect(status().is2xxSuccessful())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
               .andExpect(jsonPath("$.totalSubstats", is(85)))
               .andExpect(jsonPath("$.combatSubstats", is(51)))
               .andExpect(jsonPath("$.mentalSubstats", is(34)))
               .andExpect(jsonPath("$.nextThreshold", is(notNullValue())))
               .andExpect(jsonPath("$.currentLevel", is(notNullValue())))
               .andExpect(jsonPath("$.nextLevel", is(notNullValue())))
               .andDo(print());
    }

}