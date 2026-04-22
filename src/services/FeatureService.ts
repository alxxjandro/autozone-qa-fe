/*
 * Tecnológico de Monterrey — Campus Chihuahua
 * Desarrollo e Implantación de Sistemas de Software
 * TC3005B GPO500 - 2026
 * Autozone QA Automation
 */

import type { Feature, FeatureCreateRequest } from '../types/Feature.types'
import { apiService } from './apiService'

/**
 * Servicio de Features
 * Proporciona métodos para realizar operaciones CRUD en Features.
 * Comunicación directa con la API a través del servicio de Axios.
 */

class FeatureService {
  private readonly BASE_PATH = '/v1/features'

  /**
   * Crea un nuevo feature.
   * @param {FeatureCreateRequest} data
   * @returns {Promise<Feature>}
   */
  async create(data: FeatureCreateRequest): Promise<Feature> {
    return apiService.post<Feature>(this.BASE_PATH, data)
  }
}

export const featureService = new FeatureService()
